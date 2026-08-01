import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const PosConfigSchemaDef = {
    name: {type: "string", required: true},
    paymentMethods: {type: "objectIdArray", required: false},
    managers: {type: "objectIdArray", required: false},
    warehouses: {type: "objectIdArray", required: true, minItems: 1},
    currency: {type: "objectId", required: false},
    receiptHeader: {type: "string", required: false},
    receiptFooter: {type: "string", required: false},
    ifaceBarcodeScanner: {type: "boolean", required: false},
    ifaceCashControl: {type: "boolean", required: false},
    allowDiscount: {type: "boolean", required: false},
    allowQuantityChange: {type: "boolean", required: false},
    allowOversell: {type: "boolean", required: false},
    pinForDiscount: {type: "boolean", required: false},
    pinForCashOut: {type: "boolean", required: false},
    pinForRefund: {type: "boolean", required: false},
} as const;

export type CreatePosConfigFormType = InferCreateForm<typeof PosConfigSchemaDef>;
export type EditPosConfigFormType = InferEditForm<typeof PosConfigSchemaDef>;
