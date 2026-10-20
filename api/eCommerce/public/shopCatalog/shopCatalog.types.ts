/**
 * Public storefront catalog DTOs — lean, buyer-facing shapes (no cost fields,
 * no internal flags). Media fields are Media ids; the client resolves them to
 * `/api/auxiliary/public/media/{id}`.
 */

/** Seller company shown on platform (apex) catalog cards and detail. */
export type ShopSeller = {
    _id: string;
    name: string;
    /** Public media id for the company logo. */
    logo?: string;
    shopSlug?: string;
    shopHost?: string;
};

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
    seller?: ShopSeller;
};

export type ShopProductVariant = {
    _id: string;
    title?: string;
    sku?: string;
    price?: number;
    compareAtPrice?: number;
    options?: {name: string; value: string}[];
    mainImage?: string;
    /** False when the variant tracks stock and none is available. */
    inStock?: boolean;
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
    /** False when the product (no variants) tracks stock and none is available. */
    inStock?: boolean;
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

export type ShopFacetOption = {
    value: string;
    count: number;
};

export type ShopFacetGroup = {
    name: string;
    values: ShopFacetOption[];
};

/** Options available inside the current search / category / collection. */
export type ShopFacets = {
    total: number;
    priceMin?: number;
    priceMax?: number;
    brands: ShopFacetOption[];
    types: ShopFacetOption[];
    attributes: ShopFacetGroup[];
    inStock: number;
    onSale: number;
    rated: number;
};

export type ShopFacetsResponse = {
    data: ShopFacets;
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

export type ShopCompanyAddress = {
    label: string;
};

export type ShopCompany = {
    name?: string;
    logo?: string;
    email?: string;
    phoneNumber?: string;
    vat?: string;
    addresses?: ShopCompanyAddress[];
    website?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
};

export type ShopConfigMode = "tenant" | "platform";

export type ShopConfigResponse = {
    data: {
        mode: ShopConfigMode;
        stripePublishableKey?: string;
        currency?: {_id: string; symbol?: string; abbreviation?: string; decimalPlaces?: number};
        companyName?: string;
        company?: ShopCompany;
        /** The company has switched on the website chat (tenant shops only). */
        chatEnabled?: boolean;
    };
};
