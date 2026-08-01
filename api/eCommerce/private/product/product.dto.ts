import type {Media} from "../../../../../core/types";
import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ProductTwitterCard} from "./product.schema-def";

export type ProductSimpleRef = {
    _id: string;
    title: string;
    slug: string
};

export type Product = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    type: "physical" | "digital" | "service" | "variable" | "bundle" | "gift_card";
    title: string;
    slug: string;
    description?: string;
    shortDescription?: string;
    highlights?: string[];
    careInstructions?: string;
    warranty?: string;
    faqs?: {
        question: string;
        answer: string
    }[];
    // Identifiers
    sku?: string;
    barcode?: string;
    gtin?: string;
    upc?: string;
    ean?: string;
    isbn?: string;
    mpn?: string;
    hsCode?: string;
    countryOfOrigin?: string;
    // Organization
    brand?: string;
    vendor?: string;
    tags?: string[];
    categories?: {
        _id: string;
        name: string;
        slug: string
    }[];
    collections?: {
        _id: string;
        name: string;
        slug: string
    }[];
    // Pricing
    price?: number;
    compareAtPrice?: number;
    costPrice?: number;
    msrp?: number;
    saleStartsAt?: string;
    saleEndsAt?: string;
    taxable?: boolean;
    taxClass?: string;
    minOrderQty?: number;
    maxOrderQty?: number;
    stepQty?: number;
    currency?: {
        _id: string;
        name: string;
        symbol: string;
        abbreviation: string
    };
    // Shipping / physical
    weight?: number;
    weightUnit?: string;
    dimensions?: {
        length?: number;
        width?: number;
        height?: number
    };
    dimensionUnit?: string;
    volumetricWeight?: number;
    shippingClass?: string;
    isHazmat?: boolean;
    requiresShipping?: boolean;
    // Inventory hints
    trackInventory?: boolean;
    allowBackorder?: boolean;
    lowStockThreshold?: number;
    safetyStock?: number;
    backorderLimit?: number;
    preorderEnabled?: boolean;
    preorderAvailableAt?: string;
    availableForSale?: boolean;
    // Media
    mainImage?: Media;
    gallery?: Media[];
    videoUrls?: string[];
    documents?: Media[];
    // Variants / options
    variantOptions?: {
        _id: string;
        name: string
    }[];
    hasVariants?: boolean;
    defaultVariant?: {
        _id: string;
        sku?: string
    };
    variantCount?: number;
    // Merchandising
    relatedProducts?: ProductSimpleRef[];
    upsells?: ProductSimpleRef[];
    crossSells?: ProductSimpleRef[];
    frequentlyBoughtTogether?: ProductSimpleRef[];
    featured?: boolean;
    badges?: string[];
    // Ratings
    ratingAverage?: number;
    ratingCount?: number;
    reviewCount?: number;
    // Publishing
    status: "draft" | "active" | "archived";
    publishedAt?: string;
    // Legacy attributes / specifications
    attributes?: {
        name: string;
        values: string[]
    }[];
    specifications?: {
        label: string;
        value: string
    }[];
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        metaKeywords?: string[];
        canonicalUrl?: string;
        openGraphTitle?: string;
        openGraphDescription?: string;
        openGraphImage?: Media;
        twitterCard?: ProductTwitterCard;
        structuredDataType?: string;
        sitemapInclude?: boolean;
        sitemapPriority?: number;
        noIndex?: boolean;
    };
};
