import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CategorySchemaDef = {
    name: {type: "string", required: true},
    slug: {type: "string", required: false, format: "slug"},
    parent: {type: "objectId", required: false},
    order: {type: "number", required: false, min: 0},
} as const;

export type CreateCategoryFormType = InferCreateForm<typeof CategorySchemaDef> & {
    parentId?: string;
};

export type EditCategoryFormType = InferEditForm<typeof CategorySchemaDef>;
