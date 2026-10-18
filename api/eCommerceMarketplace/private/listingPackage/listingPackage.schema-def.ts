import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

const ListingPackagePriceDef = {
    amount: {type: "number", required: true, min: 0},
    currency: {type: "objectId", required: true},
} as const;

export const ListingPackageSchemaDef = {
    listing: {type: "objectId", required: true},
    name: {type: "string", required: true},
    description: {type: "string", required: false},
    price: {type: "embedded", required: true, items: ListingPackagePriceDef},
    deliveryDays: {type: "number", required: true, min: 0},
    order: {type: "number", required: false, min: 0},
} as const;

export type CreateListingPackageFormType = InferCreateForm<typeof ListingPackageSchemaDef>;
export type EditListingPackageFormType = InferEditForm<typeof ListingPackageSchemaDef>;
