/**
 * Public storefront catalog DTOs — lean, buyer-facing shapes (no cost fields,
 * no internal flags). Media fields are Media ids; the client resolves them to
 * `/api/auxiliary/media/{id}`.
 */

export type ShopProductCard = {
    _id: string;
    title: string;
    slug: string;
    type: string;
    price?: number;
    compareAtPrice?: number;
    mainImage?: string;
    badges?: string[];
    featured?: boolean;
    ratingAverage?: number;
    ratingCount?: number;
    hasVariants?: boolean;
};

export type ShopProductVariant = {
    _id: string;
    title?: string;
    sku?: string;
    price?: number;
    compareAtPrice?: number;
    options?: {name: string; value: string}[];
    mainImage?: string;
};

export type ShopProductDetail = ShopProductCard & {
    description?: string;
    gallery?: string[];
    videoUrls?: string[];
    attributes?: {name: string; values: string[]}[];
    specifications?: {label: string; value: string}[];
    minOrderQty?: number;
    maxOrderQty?: number;
    stepQty?: number;
    variants: ShopProductVariant[];
    related: ShopProductCard[];
    categories?: {_id: string; name: string; slug: string}[];
    seo?: {metaTitle?: string; metaDescription?: string};
};

export type ShopCategory = {
    _id: string;
    name: string;
    slug: string;
    parent?: string;
};

export type ShopCollection = {
    _id: string;
    title: string;
    slug: string;
};

export type ShopProductsResponse = {
    data: ShopProductCard[];
    total: number;
    page: number;
    limit: number;
};

export type ShopProductResponse = {
    data: ShopProductDetail;
};

export type ShopTaxonomyResponse = {
    data: {
        categories: ShopCategory[];
        collections: ShopCollection[];
    };
};

export type ShopConfigResponse = {
    data: {
        stripePublishableKey?: string;
        currency?: {_id: string; symbol?: string; abbreviation?: string; decimalPlaces?: number};
        companyName?: string;
    };
};
