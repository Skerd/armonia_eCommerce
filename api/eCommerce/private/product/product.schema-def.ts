import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

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
    name: {type: "string", required: true},
    values: {type: "stringArray", required: false},
} as const;

const ProductSpecificationItemDef = {
    label: {type: "string", required: true},
    value: {type: "string", required: true},
} as const;

const ProductFaqItemDef = {
    question: {type: "string", required: true},
    answer: {type: "string", required: true},
} as const;

const ProductSeoDef = {
    metaTitle: {type: "string", required: false, max: 160},
    metaDescription: {type: "string", required: false, max: 320},
    metaKeywords: {type: "stringArray", required: false},
    canonicalUrl: {type: "string", required: false, format: "url"},
    openGraphTitle: {type: "string", required: false, max: 160},
    openGraphDescription: {type: "string", required: false, max: 320},
    openGraphImage: {type: "mediaId", required: false},
    twitterCard: {type: "enum", required: false, options: productTwitterCards},
    structuredDataType: {type: "string", required: false},
    sitemapInclude: {type: "boolean", required: false},
    sitemapPriority: {type: "number", required: false, min: 0, max: 1},
    noIndex: {type: "boolean", required: false},
} as const;

export const ProductSchemaDef = {
    type: {type: "enum", required: true, options: productTypes},
    title: {type: "string", required: true},
    slug: {type: "string", required: false, format: "slug"},
    description: {type: "string", required: false},
    shortDescription: {type: "string", required: false},
    highlights: {type: "stringArray", required: false},
    careInstructions: {type: "string", required: false},
    warranty: {type: "string", required: false},
    // Identifiers
    sku: {type: "string", required: false},
    barcode: {type: "string", required: false},
    gtin: {type: "string", required: false},
    upc: {type: "string", required: false},
    ean: {type: "string", required: false},
    isbn: {type: "string", required: false},
    mpn: {type: "string", required: false},
    hsCode: {type: "string", required: false},
    countryOfOrigin: {type: "string", required: false},
    // Organization
    brand: {type: "string", required: false},
    vendor: {type: "string", required: false},
    tags: {type: "stringArray", required: false},
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
    taxClass: {type: "string", required: false},
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
    shippingClass: {type: "string", required: false},
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
    mainImage: {type: "mediaId", required: false},
    gallery: {type: "mediaIdArray", required: false},
    videoUrls: {type: "stringArray", required: false},
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
    badges: {type: "stringArray", required: false},
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
