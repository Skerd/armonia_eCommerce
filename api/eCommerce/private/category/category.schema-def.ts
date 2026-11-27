import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CATEGORY_NAME_MAX = 128;

/** A platform category's name in each panel language (D195); `name` is the English one. */
export const CategoryNamesDef = {
    en: {type: "string", required: false, max: CATEGORY_NAME_MAX},
    sq: {type: "string", required: false, max: CATEGORY_NAME_MAX},
    de: {type: "string", required: false, max: CATEGORY_NAME_MAX},
    fr: {type: "string", required: false, max: CATEGORY_NAME_MAX},
    it: {type: "string", required: false, max: CATEGORY_NAME_MAX},
} as const;

export const CategorySchemaDef = {
    name: {type: "string", required: true, min: 1, max: CATEGORY_NAME_MAX},
    names: {type: "embedded", required: false, items: CategoryNamesDef},
    parent: {type: "objectId", required: false},
    order: {type: "number", required: false, min: 0},
} as const;

export type CreateCategoryFormType = InferCreateForm<typeof CategorySchemaDef>;
export type EditCategoryFormType = InferEditForm<typeof CategorySchemaDef>;
