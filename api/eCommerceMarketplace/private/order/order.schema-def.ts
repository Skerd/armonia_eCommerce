import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ORDER_NOTE_MAX = 1000;

/**
 * Full field set used by validateSchemaDefAgainstMongoose.
 * Create/edit use action-specific SchemaDefs below (orders are not generic CRUD creates).
 */
export const OrderSchemaDef = {
    listing: {type: "objectId", required: false},
    taskRequest: {type: "objectId", required: false},
    bid: {type: "objectId", required: false},
    customer: {type: "objectId", required: true},
    provider: {type: "objectId", required: true},
    amount: {type: "number", required: true, min: 0},
    currency: {type: "objectId", required: true},
    note: {type: "string", required: false, max: ORDER_NOTE_MAX},
} as const;

export const orderStatuses = ["pending", "accepted", "in_progress", "completed", "cancelled"] as const;
export type OrderStatus = (typeof orderStatuses)[number];

export const CreateOrderFromListingSchemaDef = {
    listing: {type: "objectId", required: true},
    package: {type: "objectId", required: false},
    addOns: {type: "objectIdArray", required: false},
    note: OrderSchemaDef.note,
} as const;

export const ExtendOrderSchemaDef = {
    additionalDays: {type: "number", required: true, min: 1, max: 90},
} as const;

export const SubmitOrderDeliverySchemaDef = {
    message: {type: "string", required: false, max: 5000},
    attachments: {type: "mediaIdArray", required: false},
} as const;

export const RequestRevisionSchemaDef = {
    reason: {type: "string", required: true, min: 10, max: 2000},
} as const;

export type CreateOrderFromListingFormType = InferCreateForm<typeof CreateOrderFromListingSchemaDef>;
export type ExtendOrderFormType = InferCreateForm<typeof ExtendOrderSchemaDef> & {_id: string};
export type SubmitOrderDeliveryFormType = InferCreateForm<typeof SubmitOrderDeliverySchemaDef> & {_id: string};
export type RequestRevisionFormType = InferCreateForm<typeof RequestRevisionSchemaDef> & {_id: string};
