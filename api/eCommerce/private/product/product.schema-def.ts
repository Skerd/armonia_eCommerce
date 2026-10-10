import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const PRODUCT_TITLE_MAX = 128;
export const PRODUCT_SLUG_MAX = 128;
export const PRODUCT_DESCRIPTION_MAX = 2000;
export const PRODUCT_SKU_MAX = 128;
export const PRODUCT_CODE_MAX = 64;
export const PRODUCT_URL_MAX = 1024;
export const PRODUCT_META_TITLE_MAX = 160;
export const PRODUCT_META_DESCRIPTION_MAX = 320;

export const productTypes = ["physical", "digital", "service", "variable", "bundle", "gift_card"] as const;
export const productStatuses = ["draft", "active", "archived"] as const;
export const productWeightUnits = ["kg", "lb", "g", "oz"] as const;
export const productDimensionUnits = ["cm", "in"] as const;
export const productTwitterCards = ["summary", "summary_large_image"] as const;

export type ProductType = (typeof productTypes)[number];
export type ProductStatus = (typeof productStatuses)[number];
export type ProductWeightUnit = (typeof productWeightUnits)[number];
export type ProductDimensionUnit = (typeof productDimensionUnits)[number];
export type ProductTwitterCard = (typeof productTwitterCards)[number];

const ProductDimensionsDef = {
    length: {type: "number", required: false, min: 0},
    width: {type: "number", required: false, min: 0},
    height: {type: "number", required: false, min: 0},
} as const;

const ProductBundleComponentDef = {
    product: {type: "objectId", required: true},
    quantity: {type: "number", required: true, min: 1},
} as const;

const ProductAttributeItemDef = {
    name: {type: "string", required: true, min: 1, max: PRODUCT_TITLE_MAX},
    values: {type: "stringArray", required: false, itemMax: PRODUCT_TITLE_MAX},
} as const;

const ProductSpecificationItemDef = {
    label: {type: "string", required: true, min: 1, max: PRODUCT_TITLE_MAX},
    value: {type: "string", required: true, min: 1, max: PRODUCT_TITLE_MAX},
} as const;

const ProductFaqItemDef = {
    question: {type: "string", required: true, min: 1, max: PRODUCT_TITLE_MAX},
    answer: {type: "string", required: true, min: 1, max: PRODUCT_DESCRIPTION_MAX},
} as const;

const ProductSeoDef = {
    metaTitle: {type: "string", required: false, max: PRODUCT_META_TITLE_MAX},
    metaDescription: {type: "string", required: false, max: PRODUCT_META_DESCRIPTION_MAX},
    metaKeywords: {type: "stringArray", required: false, itemMax: PRODUCT_TITLE_MAX},
    canonicalUrl: {type: "string", required: false, format: "url", max: PRODUCT_URL_MAX},
    openGraphTitle: {type: "string", required: false, max: PRODUCT_META_TITLE_MAX},
    openGraphDescription: {type: "string", required: false, max: PRODUCT_META_DESCRIPTION_MAX},
    openGraphImage: {type: "mediaId", required: false, publicAccess: true},
    twitterCard: {type: "enum", required: false, options: productTwitterCards},
    structuredDataType: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    sitemapInclude: {type: "boolean", required: false},
    sitemapPriority: {type: "number", required: false, min: 0, max: 1},
    noIndex: {type: "boolean", required: false},
} as const;

export const ProductSchemaDef = {
    type: {type: "enum", required: true, options: productTypes},
    title: {type: "string", required: true, min: 1, max: PRODUCT_TITLE_MAX},
    slug: {type: "string", required: false, format: "slug", max: PRODUCT_SLUG_MAX},
    description: {type: "string", required: false, max: PRODUCT_DESCRIPTION_MAX},
    shortDescription: {type: "string", required: false, max: PRODUCT_DESCRIPTION_MAX},
    highlights: {type: "stringArray", required: false, itemMax: PRODUCT_TITLE_MAX},
    careInstructions: {type: "string", required: false, max: PRODUCT_DESCRIPTION_MAX},
    warranty: {type: "string", required: false, max: PRODUCT_DESCRIPTION_MAX},
    // Identifiers
    sku: {type: "string", required: false, max: PRODUCT_SKU_MAX},
    barcode: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    gtin: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    upc: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    ean: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    isbn: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    mpn: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    hsCode: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    countryOfOrigin: {type: "string", required: false, max: PRODUCT_TITLE_MAX},
    // Organization
    brand: {type: "string", required: false, max: PRODUCT_TITLE_MAX},
    vendor: {type: "string", required: false, max: PRODUCT_TITLE_MAX},
    tags: {type: "stringArray", required: false, itemMax: PRODUCT_TITLE_MAX},
    categories: {type: "objectIdArray", required: false},
    collections: {type: "objectIdArray", required: false},
    // Pricing
    price: {type: "number", required: false, min: 0},
    compareAtPrice: {type: "number", required: false, min: 0},
    costPrice: {type: "number", required: false, min: 0},
    msrp: {type: "number", required: false, min: 0},
    saleStartsAt: {type: "date", required: false},
    saleEndsAt: {type: "date", required: false},
    taxable: {type: "boolean", required: false},
    taxClass: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    minOrderQty: {type: "number", required: false, min: 0},
    maxOrderQty: {type: "number", required: false, min: 0},
    stepQty: {type: "number", required: false, min: 0},
    currency: {type: "objectId", required: false},
    // Shipping / physical
    weight: {type: "number", required: false, min: 0},
    weightUnit: {type: "enum", required: false, options: productWeightUnits},
    dimensions: {type: "embedded", required: false, items: ProductDimensionsDef},
    dimensionUnit: {type: "enum", required: false, options: productDimensionUnits},
    volumetricWeight: {type: "number", required: false, min: 0},
    shippingClass: {type: "string", required: false, max: PRODUCT_CODE_MAX},
    isHazmat: {type: "boolean", required: false},
    requiresShipping: {type: "boolean", required: false},
    // Inventory hints
    trackInventory: {type: "boolean", required: false},
    allowBackorder: {type: "boolean", required: false},
    lowStockThreshold: {type: "number", required: false, min: 0},
    safetyStock: {type: "number", required: false, min: 0},
    backorderLimit: {type: "number", required: false, min: 0},
    preorderEnabled: {type: "boolean", required: false},
    preorderAvailableAt: {type: "date", required: false},
    availableForSale: {type: "boolean", required: false},
    // Media
    mainImage: {type: "mediaId", required: false, publicAccess: true},
    gallery: {type: "mediaIdArray", required: false, publicAccess: true},
    videoUrls: {type: "stringArray", required: false, itemMax: PRODUCT_URL_MAX},
    documents: {type: "mediaIdArray", required: false},
    // Variants / options
    variantOptions: {type: "objectIdArray", required: false},
    hasVariants: {type: "boolean", required: false},
    defaultVariant: {type: "objectId", required: false},
    // Merchandising
    relatedProducts: {type: "objectIdArray", required: false},
    upsells: {type: "objectIdArray", required: false},
    crossSells: {type: "objectIdArray", required: false},
    frequentlyBoughtTogether: {type: "objectIdArray", required: false},
    featured: {type: "boolean", required: false},
    badges: {type: "stringArray", required: false, itemMax: PRODUCT_CODE_MAX},
    // Publishing
    status: {type: "enum", required: false, options: productStatuses},
    publishedAt: {type: "date", required: false},
    // Bundles (type "bundle"): components exploded for inventory reservation
    bundleComponents: {type: "embeddedArray", required: false, items: ProductBundleComponentDef},
    // Digital delivery (type "digital"): per-purchase download policy
    downloadLimit: {type: "number", required: false, min: 1},
    downloadExpiryDays: {type: "number", required: false, min: 1},
    // Structured content (embedded / embeddedArray)
    attributes: {type: "embeddedArray", required: false, items: ProductAttributeItemDef},
    specifications: {type: "embeddedArray", required: false, items: ProductSpecificationItemDef},
    faqs: {type: "embeddedArray", required: false, items: ProductFaqItemDef},
    seo: {type: "embedded", required: false, items: ProductSeoDef},
} as const;

export type CreateProductFormType = InferCreateForm<typeof ProductSchemaDef>;

export type EditProductFormType = InferEditForm<typeof ProductSchemaDef>;
