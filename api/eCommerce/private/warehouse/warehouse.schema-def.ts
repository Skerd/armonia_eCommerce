import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

const WarehouseAddressDef = {
    country: {type: "objectId", required: false},
    state: {type: "objectId", required: false},
    city: {type: "objectId", required: false},
    street: {type: "string", required: false},
    postalCode: {type: "string", required: false},
    latitude: {type: "number", required: false},
    longitude: {type: "number", required: false},
} as const;

export const WarehouseSchemaDef = {
    name: {type: "string", required: true},
    code: {type: "string", required: true},
    address: {type: "embedded", required: false, items: WarehouseAddressDef},
} as const;

export type CreateWarehouseFormType = InferCreateForm<typeof WarehouseSchemaDef>;
export type EditWarehouseFormType = InferEditForm<typeof WarehouseSchemaDef>;
