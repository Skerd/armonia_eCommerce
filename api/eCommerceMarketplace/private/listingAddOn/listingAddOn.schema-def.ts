import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

const ListingAddOnPriceDef = {
    amount: {type: "number", required: true, min: 0},
    currency: {type: "objectId", required: true},
} as const;

export const ListingAddOnSchemaDef = {
    listing: {type: "objectId", required: true},
    name: {type: "string", required: true},
    price: {type: "embedded", required: true, items: ListingAddOnPriceDef},
    deliveryDays: {type: "number", required: false, min: 0},
} as const;

export type CreateListingAddOnFormType = InferCreateForm<typeof ListingAddOnSchemaDef>;
export type EditListingAddOnFormType = InferEditForm<typeof ListingAddOnSchemaDef>;
