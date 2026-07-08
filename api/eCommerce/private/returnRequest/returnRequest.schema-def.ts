import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const returnRequestTypes = ["return", "exchange", "refund"] as const;
export const returnRequestStatuses = ["pending", "approved", "rejected", "received", "completed"] as const;
export type ReturnRequestType = (typeof returnRequestTypes)[number];
export type ReturnRequestStatus = (typeof returnRequestStatuses)[number];

const ReturnRequestItemDef = {
    orderItemId: {type: "objectId", required: true},
    quantity: {type: "number", required: true, min: 1},
    reason: {type: "string", required: true},
} as const;

export const ReturnRequestSchemaDef = {
    order: {type: "objectId", required: true},
    type: {type: "enum", required: true, options: returnRequestTypes},
    items: {type: "embeddedArray", required: true, items: ReturnRequestItemDef, minItems: 1},
    customerNote: {type: "string", required: false},
    status: {type: "enum", required: false, options: returnRequestStatuses},
    refundAmount: {type: "number", required: false, min: 0},
    adminNote: {type: "string", required: false},
} as const;

export type CreateReturnRequestFormType = InferCreateForm<typeof ReturnRequestSchemaDef> & {
    notes?: string;
};

export type EditReturnRequestFormType = InferEditForm<typeof ReturnRequestSchemaDef> & {
    _id: string;
    notes?: string;
};
