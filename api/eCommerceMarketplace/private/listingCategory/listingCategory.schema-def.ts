import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ListingCategorySchemaDef = {
    name: {type: "string", required: true},
    parentListingCategory: {type: "objectId", required: false},
    order: {type: "number", required: false, min: 0},
} as const;

export type CreateListingCategoryFormType = InferCreateForm<typeof ListingCategorySchemaDef>;
export type EditListingCategoryFormType = InferEditForm<typeof ListingCategorySchemaDef>;
