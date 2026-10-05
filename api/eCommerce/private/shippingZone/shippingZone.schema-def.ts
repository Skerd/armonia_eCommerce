import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const SHIPPING_ZONE_NAME_MAX = 128;
export const SHIPPING_ZONE_RATE_NAME_MAX = 128;
export const SHIPPING_ZONE_CARRIER_MAX = 128;
export const SHIPPING_ZONE_POSTAL_CODE_PATTERN_MAX = 64;
export const SHIPPING_ZONE_POSTAL_CODE_PATTERNS_MAX_ITEMS = 50;

export const shippingRateTypes = ["flat", "weight", "price", "quantity", "free"] as const;
export type ShippingRateType = (typeof shippingRateTypes)[number];

const ShippingRateConditionDef = {
    minWeight: {type: "number", required: false, min: 0},
    maxWeight: {type: "number", required: false, min: 0},
    minOrderAmount: {type: "number", required: false, min: 0},
    maxOrderAmount: {type: "number", required: false, min: 0},
} as const;

const ShippingRateItemDef = {
    name: {type: "string", required: true, min: 1, max: SHIPPING_ZONE_RATE_NAME_MAX},
    type: {type: "enum", required: true, options: shippingRateTypes},
    price: {type: "number", required: false, min: 0},
    carrier: {type: "string", required: false, max: SHIPPING_ZONE_CARRIER_MAX},
    estimatedDeliveryDays: {type: "number", required: false, min: 0},
    conditions: {type: "embedded", required: false, items: ShippingRateConditionDef},
} as const;

/** Form fields only — `isActive` is managed via activate / deactivate actions. */
export const ShippingZoneSchemaDef = {
    name: {type: "string", required: true, min: 1, max: SHIPPING_ZONE_NAME_MAX},
    countries: {type: "objectIdArray", required: false},
    states: {type: "objectIdArray", required: false},
    postalCodePatterns: {
        type: "stringArray",
        required: false,
        maxItems: SHIPPING_ZONE_POSTAL_CODE_PATTERNS_MAX_ITEMS,
        itemMax: SHIPPING_ZONE_POSTAL_CODE_PATTERN_MAX,
    },
    rates: {type: "embeddedArray", required: true, items: ShippingRateItemDef, minItems: 1},
} as const;

export type CreateShippingZoneFormType = InferCreateForm<typeof ShippingZoneSchemaDef>;
export type EditShippingZoneFormType = InferEditForm<typeof ShippingZoneSchemaDef>;
