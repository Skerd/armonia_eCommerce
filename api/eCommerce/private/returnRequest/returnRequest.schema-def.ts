import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const RETURN_REQUEST_NOTE_MAX = 2000;
export const RETURN_REQUEST_REASON_MAX = 2000;

export const returnRequestTypes = ["return", "exchange", "refund"] as const;
export const returnRequestStatuses = ["pending", "approved", "rejected", "received", "completed"] as const;
export type ReturnRequestType = (typeof returnRequestTypes)[number];
export type ReturnRequestStatus = (typeof returnRequestStatuses)[number];

const ReturnRequestItemDef = {
    orderItemId: {type: "objectId", required: true},
    quantity: {type: "number", required: true, min: 1},
    reason: {type: "string", required: true, min: 1, max: RETURN_REQUEST_REASON_MAX},
} as const;

export const ReturnRequestSchemaDef = {
    order: {type: "objectId", required: true},
    type: {type: "enum", required: true, options: returnRequestTypes},
    items: {type: "embeddedArray", required: true, items: ReturnRequestItemDef, minItems: 1},
    customerNote: {type: "string", required: false, max: RETURN_REQUEST_NOTE_MAX},
    refundAmount: {type: "number", required: false, min: 0},
    adminNote: {type: "string", required: false, max: RETURN_REQUEST_NOTE_MAX},
} as const;

export type CreateReturnRequestFormType = InferCreateForm<typeof ReturnRequestSchemaDef>;
export type EditReturnRequestFormType = InferEditForm<typeof ReturnRequestSchemaDef>;
