import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CATEGORY_NAME_MAX = 128;

export const CategorySchemaDef = {
    name: {type: "string", required: true, min: 1, max: CATEGORY_NAME_MAX},
    parent: {type: "objectId", required: false},
    order: {type: "number", required: false, min: 0},
} as const;

export type CreateCategoryFormType = InferCreateForm<typeof CategorySchemaDef>;
export type EditCategoryFormType = InferEditForm<typeof CategorySchemaDef>;
