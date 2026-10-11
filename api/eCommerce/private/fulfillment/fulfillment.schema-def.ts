import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const FULFILLMENT_CARRIER_MAX = 128;
export const FULFILLMENT_TRACKING_NUMBER_MAX = 64;
export const FULFILLMENT_TRACKING_URL_MAX = 1024;
export const FULFILLMENT_NOTES_MAX = 2000;

export const fulfillmentStatuses = ["pending", "shipped", "delivered", "failed"] as const;
export type FulfillmentStatus = (typeof fulfillmentStatuses)[number];

const FulfillmentItemDef = {
    orderItemId: {type: "objectId", required: true},
    quantity: {type: "number", required: true, min: 1},
} as const;

export const FulfillmentSchemaDef = {
    order: {type: "objectId", required: true},
    items: {type: "embeddedArray", required: true, items: FulfillmentItemDef, minItems: 1},
    carrier: {type: "string", required: false, max: FULFILLMENT_CARRIER_MAX},
    trackingNumber: {type: "string", required: false, max: FULFILLMENT_TRACKING_NUMBER_MAX},
    trackingUrl: {type: "string", required: false, max: FULFILLMENT_TRACKING_URL_MAX},
    estimatedDeliveryAt: {type: "date", required: false},
    notes: {type: "string", required: false, max: FULFILLMENT_NOTES_MAX},
} as const;

export type CreateFulfillmentFormType = InferCreateForm<typeof FulfillmentSchemaDef>;
export type EditFulfillmentFormType = InferEditForm<typeof FulfillmentSchemaDef>;
