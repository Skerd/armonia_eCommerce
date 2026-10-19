import {z} from "zod";
import {isArrayOfObjectIdsZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
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

const priceBound = z.coerce.number().min(0).max(1_000_000_000).optional();

export function shopProductsFormSchema(languageCode: string, _form: any = null) {
    return z.object({
        search: z.string().max(200).optional(),
        categorySlug: z.string().max(200).optional(),
        categoryIds: isArrayOfObjectIdsZod("categoryIds", languageCode).optional(),
        collectionSlug: z.string().max(200).optional(),
        collectionId: isObjectIdZod("collectionId", languageCode).optional(),
        sort: z.enum(SHOP_PRODUCT_SORTS).optional(),
        page: z.coerce.number().min(1).max(10000).optional(),
        limit: z.coerce.number().min(1).max(60).optional(),
        priceMin: priceBound,
        priceMax: priceBound,
        inStock: z.boolean().optional(),
        onSale: z.boolean().optional(),
        brands: z.array(z.string().trim().min(1).max(200)).max(40).optional(),
        types: z.array(z.enum(SHOP_PRODUCT_TYPES)).max(SHOP_PRODUCT_TYPES.length).optional(),
        attributes: z.array(z.object({
            name: z.string().trim().min(1).max(200),
            values: z.array(z.string().trim().min(1).max(200)).min(1).max(30),
        })).max(12).optional(),
        minRating: z.coerce.number().int().min(1).max(5).optional(),
    });
}

/** Facets follow the browse scope (search, category, collection), not the refinements. */
export function shopFacetsFormSchema(languageCode: string, form: any = null) {
    return shopProductsFormSchema(languageCode, form).pick({
        search: true,
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

export function shopProductFormSchema(languageCode: string, _form: any = null) {
    return z.object({
        id: isObjectIdZod("id", languageCode).optional(),
        slug: z.string().min(1).max(300).optional(),
        sellerCompanyId: isObjectIdZod("sellerCompanyId", languageCode).optional(),
    }).refine((value) => Boolean(value.id || value.slug), {
        message: "id_or_slug_required",
        path: ["slug"],
    });
}
