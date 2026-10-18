export const orderDeliveryStatuses = ["submitted", "accepted", "revision_requested"] as const;
export type OrderDeliveryStatus = (typeof orderDeliveryStatuses)[number];

/**
 * Full field set for SchemaDef↔Mongoose validation.
 * Rows are created by OrderActions.submitDelivery; status is server-set.
 */
export const OrderDeliverySchemaDef = {
    order: {type: "objectId", required: true},
    message: {type: "string", required: false},
    attachments: {type: "mediaIdArray", required: false},
} as const;
