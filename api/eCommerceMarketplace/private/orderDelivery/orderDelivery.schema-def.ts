import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const orderDeliveryStatuses = ["submitted", "accepted", "revision_requested"] as const;
export type OrderDeliveryStatus = (typeof orderDeliveryStatuses)[number];

/**
 * Full field set for SchemaDef↔Mongoose validation.
 * Status is typically set server-side; create form uses order + message + attachments.
 */
export const OrderDeliverySchemaDef = {
    order: {type: "objectId", required: true},
    message: {type: "string", required: false},
    attachments: {type: "mediaIdArray", required: false},
} as const;

export const AcceptOrderDeliverySchemaDef = {
    delivery: {type: "objectId", required: true},
} as const;

export type CreateOrderDeliveryFormType = InferCreateForm<typeof OrderDeliverySchemaDef>;
export type AcceptOrderDeliveryFormType = InferCreateForm<typeof AcceptOrderDeliverySchemaDef>;
