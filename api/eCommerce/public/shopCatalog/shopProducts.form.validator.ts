import {z} from "zod";

export const SHOP_PRODUCT_SORTS = ["newest", "priceAsc", "priceDesc", "featured"] as const;
export type ShopProductSort = (typeof SHOP_PRODUCT_SORTS)[number];

export type ShopProductsFormType = {
    search?: string;
    categorySlug?: string;
    collectionSlug?: string;
    sort?: ShopProductSort;
    page?: number;
    limit?: number;
};

export function shopProductsFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        search: z.string().max(200).optional(),
        categorySlug: z.string().max(200).optional(),
        collectionSlug: z.string().max(200).optional(),
        sort: z.enum(SHOP_PRODUCT_SORTS).optional(),
        page: z.coerce.number().min(1).max(10000).optional(),
        limit: z.coerce.number().min(1).max(60).optional(),
    });
}

export type ShopProductFormType = {slug: string};

export function shopProductFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        slug: z.string().min(1).max(300),
    });
}
