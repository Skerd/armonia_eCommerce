import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const discountTypes = ["percentage", "fixed", "free_shipping", "buy_x_get_y"] as const;
export const discountAppliesTo = ["order", "product", "collection", "category"] as const;

export type DiscountType = (typeof discountTypes)[number];
export type DiscountAppliesTo = (typeof discountAppliesTo)[number];

const BuyXGetYDef = {
    buyQuantity: {type: "number", required: true, min: 1},
    getQuantity: {type: "number", required: true, min: 1},
    getProductIds: {type: "objectIdArray", required: true, minItems: 1},
} as const;

export const DiscountSchemaDef = {
    type: {type: "enum", required: true, options: discountTypes},
    title: {type: "string", required: true},
    code: {type: "string", required: false},
    value: {type: "number", required: true, min: 0},
    appliesTo: {type: "enum", required: true, options: discountAppliesTo},
    targetIds: {type: "objectIdArray", required: false},
    minimumOrderAmount: {type: "number", required: false, min: 0},
    minimumQuantity: {type: "number", required: false, min: 0},
    usageLimit: {type: "number", required: false, min: 0},
    usageLimitPerCustomer: {type: "number", required: false, min: 0},
    customerGroups: {type: "objectIdArray", required: false},
    startsAt: {type: "date", required: true},
    endsAt: {type: "date", required: false},
    buyXGetY: {type: "embedded", required: false, items: BuyXGetYDef},
} as const;

export type CreateDiscountFormType = InferCreateForm<typeof DiscountSchemaDef>;
export type EditDiscountFormType = InferEditForm<typeof DiscountSchemaDef>;
