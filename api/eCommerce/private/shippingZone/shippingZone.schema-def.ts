import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const shippingRateTypes = ["flat", "weight", "price", "quantity", "free"] as const;
export type ShippingRateType = (typeof shippingRateTypes)[number];

const ShippingRateConditionDef = {
    minWeight: {type: "number", required: false, min: 0},
    maxWeight: {type: "number", required: false, min: 0},
    minOrderAmount: {type: "number", required: false, min: 0},
    maxOrderAmount: {type: "number", required: false, min: 0},
} as const;

const ShippingRateItemDef = {
    name: {type: "string", required: true},
    type: {type: "enum", required: true, options: shippingRateTypes},
    price: {type: "number", required: false, min: 0},
    carrier: {type: "string", required: false},
    estimatedDeliveryDays: {type: "number", required: false, min: 0},
    conditions: {type: "embedded", required: false, items: ShippingRateConditionDef},
} as const;

/** Form fields only — `isActive` is managed via activate / deactivate actions. */
export const ShippingZoneSchemaDef = {
    name: {type: "string", required: true},
    countries: {type: "objectIdArray", required: false},
    states: {type: "objectIdArray", required: false},
    postalCodePatterns: {type: "stringArray", required: false},
    rates: {type: "embeddedArray", required: true, items: ShippingRateItemDef, minItems: 1},
} as const;

export type CreateShippingZoneFormType = InferCreateForm<typeof ShippingZoneSchemaDef>;
export type EditShippingZoneFormType = InferEditForm<typeof ShippingZoneSchemaDef>;
