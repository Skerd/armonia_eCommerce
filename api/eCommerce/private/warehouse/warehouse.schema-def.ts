import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const WAREHOUSE_NAME_MAX = 128;
export const WAREHOUSE_CODE_MAX = 64;
export const WAREHOUSE_STREET_MAX = 256;
export const WAREHOUSE_POSTAL_CODE_MAX = 32;

const WarehouseAddressDef = {
    country: {type: "objectId", required: false},
    state: {type: "objectId", required: false},
    city: {type: "objectId", required: false},
    street: {type: "string", required: false, max: WAREHOUSE_STREET_MAX},
    postalCode: {type: "string", required: false, max: WAREHOUSE_POSTAL_CODE_MAX},
    latitude: {type: "number", required: false, min: -90, max: 90},
    longitude: {type: "number", required: false, min: -180, max: 180},
} as const;

export const WarehouseSchemaDef = {
    name: {type: "string", required: true, min: 1, max: WAREHOUSE_NAME_MAX},
    code: {type: "string", required: true, min: 1, max: WAREHOUSE_CODE_MAX},
    address: {type: "embedded", required: false, items: WarehouseAddressDef},
} as const;

export type CreateWarehouseFormType = InferCreateForm<typeof WarehouseSchemaDef>;
export type EditWarehouseFormType = InferEditForm<typeof WarehouseSchemaDef>;
