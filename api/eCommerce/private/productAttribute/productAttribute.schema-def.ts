import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ProductAttributeSchemaDef = {
    name: {type: "string", required: true},
    values: {type: "stringArray", required: false},
    isVisibleOnProductPage: {type: "boolean", required: false},
    isUsedForVariants: {type: "boolean", required: false},
    position: {type: "number", required: false, min: 0},
} as const;

export type CreateProductAttributeFormType = InferCreateForm<typeof ProductAttributeSchemaDef>;
export type EditProductAttributeFormType = InferEditForm<typeof ProductAttributeSchemaDef>;
