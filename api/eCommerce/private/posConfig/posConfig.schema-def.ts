import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const POS_CONFIG_NAME_MAX = 128;
export const POS_CONFIG_RECEIPT_MAX = 1000;

export const PosConfigSchemaDef = {
    name: {type: "string", required: true, min: 1, max: POS_CONFIG_NAME_MAX},
    paymentMethods: {type: "objectIdArray", required: true, minItems: 1},
    managers: {type: "objectIdArray", required: false},
    warehouses: {type: "objectIdArray", required: true, minItems: 1},
    currency: {type: "objectId", required: false},
    /** When set, this till fiscalizes sales with this config. Empty means no fiscalization. */
    fiscalConfig: {type: "objectId", required: false},
    receiptHeader: {type: "string", required: false, max: POS_CONFIG_RECEIPT_MAX},
    receiptFooter: {type: "string", required: false, max: POS_CONFIG_RECEIPT_MAX},
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
