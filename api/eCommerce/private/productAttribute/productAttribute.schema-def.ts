import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const PRODUCT_ATTRIBUTE_NAME_MAX = 128;
export const PRODUCT_ATTRIBUTE_VALUE_MAX = 128;
export const PRODUCT_ATTRIBUTE_VALUES_MAX_ITEMS = 50;

export const ProductAttributeSchemaDef = {
    name: {type: "string", required: true, min: 1, max: PRODUCT_ATTRIBUTE_NAME_MAX},
    values: {
        type: "stringArray",
        required: false,
        maxItems: PRODUCT_ATTRIBUTE_VALUES_MAX_ITEMS,
        itemMax: PRODUCT_ATTRIBUTE_VALUE_MAX,
    },
    isVisibleOnProductPage: {type: "boolean", required: false},
    isUsedForVariants: {type: "boolean", required: false},
    position: {type: "number", required: false, min: 0},
} as const;

export type CreateProductAttributeFormType = InferCreateForm<typeof ProductAttributeSchemaDef>;
export type EditProductAttributeFormType = InferEditForm<typeof ProductAttributeSchemaDef>;
