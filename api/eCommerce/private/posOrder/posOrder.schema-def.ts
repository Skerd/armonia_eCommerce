/**
 * The POS order fields the till sends as given (`payPosOrder` / `holdPosOrder`): customer, note and the request id
 * that makes a payment idempotent. Lines, payments, amounts, state and fiscal data are computed by the server
 * (`validateSchemaDefAgainstMongoose` lists the required ones as server-owned).
 */
export const PosOrderSchemaDef = {
    customer: {type: "objectId", required: false},
    customerName: {type: "string", required: false},
    note: {type: "string", required: false},
    clientRequestId: {type: "string", required: false},
} as const;
