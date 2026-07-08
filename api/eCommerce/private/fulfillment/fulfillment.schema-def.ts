import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const fulfillmentStatuses = ["pending", "shipped", "delivered", "failed"] as const;
export type FulfillmentStatus = (typeof fulfillmentStatuses)[number];

const FulfillmentItemDef = {
    orderItemId: {type: "objectId", required: true},
    quantity: {type: "number", required: true, min: 1},
} as const;

export const FulfillmentSchemaDef = {
    order: {type: "objectId", required: true},
    items: {type: "embeddedArray", required: true, items: FulfillmentItemDef, minItems: 1},
    carrier: {type: "string", required: false},
    trackingNumber: {type: "string", required: false},
    trackingUrl: {type: "string", required: false},
    status: {type: "enum", required: false, options: fulfillmentStatuses},
    shippedAt: {type: "date", required: false},
    estimatedDeliveryAt: {type: "date", required: false},
    deliveredAt: {type: "date", required: false},
    notes: {type: "string", required: false},
} as const;

export type CreateFulfillmentFormType = InferCreateForm<typeof FulfillmentSchemaDef>;
export type EditFulfillmentFormType = InferEditForm<typeof FulfillmentSchemaDef>;
