import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const posPaymentMethodTypes = ["cash", "card", "bank", "customer_account", "other"] as const;

export type PosPaymentMethodType = (typeof posPaymentMethodTypes)[number];

export const posTerminalProviders = ["manual", "local_http"] as const;

export type PosTerminalProvider = (typeof posTerminalProviders)[number];

export const PosPaymentMethodSchemaDef = {
    name: {type: "string", required: true},
    type: {type: "enum", required: true, options: posPaymentMethodTypes},
    isActive: {type: "boolean", required: false},
    sequence: {type: "number", required: false, min: 0},
    /** Comma-separated cash tender chips, e.g. "0.1,0.2,0.5,1,5,10,20,50,100". Empty → defaults. */
    cashQuickAmounts: {type: "string", required: false, max: 200},
    /** When true (card/bank), till charges the bank payment terminal before completing the sale. */
    terminalEnabled: {type: "boolean", required: false},
    terminalProvider: {type: "enum", required: false, options: posTerminalProviders},
    terminalHost: {type: "string", required: false, max: 255},
    terminalPort: {type: "number", required: false, min: 1, max: 65535},
    terminalId: {type: "string", required: false, max: 120},
    terminalPath: {type: "string", required: false, max: 200},
} as const;

export type CreatePosPaymentMethodFormType = InferCreateForm<typeof PosPaymentMethodSchemaDef>;
export type EditPosPaymentMethodFormType = InferEditForm<typeof PosPaymentMethodSchemaDef>;
