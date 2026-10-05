import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const PRODUCT_VARIANT_SKU_MAX = 128;
export const PRODUCT_VARIANT_BARCODE_MAX = 64;
export const PRODUCT_VARIANT_ATTRIBUTE_VALUE_MAX = 128;

export const productVariantStatuses = ["active", "inactive"] as const;
export type ProductVariantStatus = (typeof productVariantStatuses)[number];

const ProductVariantAttributeItemDef = {
    attribute: {type: "objectId", required: true},
    value: {type: "string", required: true, min: 1, max: PRODUCT_VARIANT_ATTRIBUTE_VALUE_MAX},
} as const;

const ProductVariantDimensionsDef = {
    length: {type: "number", required: false, min: 0},
    width: {type: "number", required: false, min: 0},
    height: {type: "number", required: false, min: 0},
} as const;

export const ProductVariantSchemaDef = {
    product: {type: "objectId", required: true},
    sku: {type: "string", required: false, max: PRODUCT_VARIANT_SKU_MAX},
    barcode: {type: "string", required: false, max: PRODUCT_VARIANT_BARCODE_MAX},
    attributeCombination: {type: "embeddedArray", required: false, items: ProductVariantAttributeItemDef},
    price: {type: "number", required: false, min: 0},
    compareAtPrice: {type: "number", required: false, min: 0},
    costPrice: {type: "number", required: false, min: 0},
    currency: {type: "objectId", required: false},
    weight: {type: "number", required: false, min: 0},
    dimensions: {type: "embedded", required: false, items: ProductVariantDimensionsDef},
    mainImage: {type: "mediaId", required: false, publicAccess: true},
    order: {type: "number", required: false, min: 0},
    status: {type: "enum", required: false, options: productVariantStatuses},
    trackInventory: {type: "boolean", required: false},
} as const;

export type CreateProductVariantFormType = InferCreateForm<typeof ProductVariantSchemaDef>;
export type EditProductVariantFormType = InferEditForm<typeof ProductVariantSchemaDef>;
