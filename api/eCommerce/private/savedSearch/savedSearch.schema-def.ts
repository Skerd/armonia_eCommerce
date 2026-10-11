import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {SHOP_PRODUCT_SORTS} from "../../public/shopCatalog/shopProducts.form.validator";

export const SAVED_SEARCH_NAME_MAX = 100;

export const SavedSearchSchemaDef = {
    customer: {type: "objectId", required: true},
    name: {type: "string", required: true, max: SAVED_SEARCH_NAME_MAX},
    categoryIds: {type: "objectIdArray", required: false},
    collectionId: {type: "objectId", required: false},
    priceMin: {type: "number", required: false, min: 0},
    priceMax: {type: "number", required: false, min: 0},
    sort: {type: "enum", required: false, options: SHOP_PRODUCT_SORTS},
} as const;

export type CreateSavedSearchFormType = InferCreateForm<typeof SavedSearchSchemaDef>;
export type EditSavedSearchFormType = InferEditForm<typeof SavedSearchSchemaDef> & {_id: string};
