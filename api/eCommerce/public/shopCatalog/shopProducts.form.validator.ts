import {z} from "zod";
import {getValidationMessage, isArrayOfObjectIdsZod, isObjectIdZod, isBooleanZod, isEnumZod, stringMaxLengthZod, arrayMaxItemsZod, arrayMinMaxItemsZod, inBetweenRangeZod, isIntegerZod, stringMinMaxLengthZod, trimmedZod} from "../../../../../core/helpers/zodBuilder";
import {productTypes} from "../../private/product/product.schema-def";

export const SHOP_PRODUCT_SORTS = ["newest", "priceAsc", "priceDesc", "featured"] as const;
export type ShopProductSort = (typeof SHOP_PRODUCT_SORTS)[number];

export const SHOP_PRODUCT_TYPES = productTypes;
export type ShopProductType = (typeof SHOP_PRODUCT_TYPES)[number];

export type ShopAttributeFilter = {
    name: string;
    values: string[];
};

export type ShopProductsFormType = {
    search?: string;
    sellerCompanyId?: string;
    categorySlug?: string;
    categoryIds?: string[];
    collectionSlug?: string;
    collectionId?: string;
    sort?: ShopProductSort;
    page?: number;
    limit?: number;
    priceMin?: number;
    priceMax?: number;
    inStock?: boolean;
    onSale?: boolean;
    brands?: string[];
    types?: ShopProductType[];
    attributes?: ShopAttributeFilter[];
    minRating?: number;
};

export function shopProductsFormSchema(languageCode: string, form: any = null) {
    const label = (name: string): string => form?.[`${name}Label`] ?? name;
    const priceBound = (name: string) => inBetweenRangeZod(label(name), 0, 1_000_000_000, languageCode).optional();
    const filterText = (name: string) => trimmedZod(stringMinMaxLengthZod(label(name), 1, 200, languageCode));
    return z.object({
        search: stringMaxLengthZod(form?.["searchLabel"] ?? "search", 200, languageCode).optional(),
        sellerCompanyId: isObjectIdZod("sellerCompanyId", languageCode).optional(),
        categorySlug: stringMaxLengthZod(form?.["categorySlugLabel"] ?? "categorySlug", 200, languageCode).optional(),
        categoryIds: isArrayOfObjectIdsZod("categoryIds", languageCode).optional(),
        collectionSlug: stringMaxLengthZod(form?.["collectionSlugLabel"] ?? "collectionSlug", 200, languageCode).optional(),
        collectionId: isObjectIdZod("collectionId", languageCode).optional(),
        sort: isEnumZod(form?.["sortLabel"] ?? "sort", SHOP_PRODUCT_SORTS, SHOP_PRODUCT_SORTS.join(", "), languageCode).optional(),
        page: inBetweenRangeZod(label("page"), 1, 10000, languageCode).optional(),
        limit: inBetweenRangeZod(label("limit"), 1, 60, languageCode).optional(),
        priceMin: priceBound("priceMin"),
        priceMax: priceBound("priceMax"),
        inStock: isBooleanZod(form?.["inStockLabel"] ?? "inStock", languageCode).optional(),
        onSale: isBooleanZod(form?.["onSaleLabel"] ?? "onSale", languageCode).optional(),
        brands: arrayMaxItemsZod(label("brands"), 40, languageCode, filterText("brands")).optional(),
        types: arrayMaxItemsZod(label("types"), SHOP_PRODUCT_TYPES.length, languageCode, isEnumZod(label("types"), SHOP_PRODUCT_TYPES, SHOP_PRODUCT_TYPES.join(", "), languageCode)).optional(),
        attributes: arrayMaxItemsZod(label("attributes"), 12, languageCode, z.object({
            name: filterText("name"),
            values: arrayMinMaxItemsZod(label("values"), 1, 30, languageCode, filterText("values")),
        })).optional(),
        minRating: isIntegerZod(label("minRating"), languageCode, {min: 1, max: 5}).optional(),
    });
}

/** Facets follow the browse scope (search, category, collection), not the refinements. */
export function shopFacetsFormSchema(languageCode: string, form: any = null) {
    return shopProductsFormSchema(languageCode, form).pick({
        search: true,
        sellerCompanyId: true,
        categorySlug: true,
        categoryIds: true,
        collectionSlug: true,
        collectionId: true,
    });
}

export type ShopProductFormType = {
    /** Preferred on platform apex — unique across tenants. */
    id?: string;
    slug?: string;
    /** Disambiguates slug when several sellers share it. */
    sellerCompanyId?: string;
};

export function shopProductFormSchema(languageCode: string, form: any = null) {
    return z.object({
        id: isObjectIdZod("id", languageCode).optional(),
        slug: stringMinMaxLengthZod(form?.["slugLabel"] ?? "slug", 1, 300, languageCode).optional(),
        sellerCompanyId: isObjectIdZod("sellerCompanyId", languageCode).optional(),
    }).refine((value) => Boolean(value.id || value.slug), {
        message: getValidationMessage("form", "oneOfRequired", [form?.["idLabel"] ?? "id", form?.["slugLabel"] ?? "slug"], languageCode),
        path: ["slug"],
    });
}
