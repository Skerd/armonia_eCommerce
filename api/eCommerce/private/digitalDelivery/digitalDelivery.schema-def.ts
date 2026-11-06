/**
 * Download entitlements are issued when an order is paid, never by a panel form.
 * The def exists so the Mongoose schema cannot drift from the wire contract.
 */
export const DigitalDeliverySchemaDef = {
    order: {type: "objectId", required: true},
    product: {type: "objectId", required: true},
    customer: {type: "objectId", required: true},
    token: {type: "string", required: true},
    media: {type: "objectIdArray", required: false},
    downloadLimit: {type: "number", required: true, min: 1},
    downloadCount: {type: "number", required: false, min: 0},
    expiresAt: {type: "date", required: false},
} as const;
