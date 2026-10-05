import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Till methods offered for now. Bank, customer account, and other stay out until those flows exist. */
export const posPaymentMethodTypes = ["cash", "card"] as const;

export type PosPaymentMethodType = (typeof posPaymentMethodTypes)[number];

export const posTerminalProviders = ["manual", "local_http"] as const;

export type PosTerminalProvider = (typeof posTerminalProviders)[number];

export const posTerminalProtocols = ["http", "https"] as const;

export type PosTerminalProtocol = (typeof posTerminalProtocols)[number];

export const POS_PAYMENT_METHOD_NAME_MAX = 128;
export const POS_PAYMENT_METHOD_CASH_QUICK_AMOUNTS_MAX = 200;
export const POS_PAYMENT_METHOD_TERMINAL_HOST_MAX = 255;
export const POS_PAYMENT_METHOD_TERMINAL_ID_MAX = 120;
export const POS_PAYMENT_METHOD_TERMINAL_PATH_MAX = 200;

/** Card type is the only case that collects a bank terminal. */
const cardTerminalRequired = {field: "type", whenValues: ["card"], on: ["create", "edit"]} as const;

export const PosPaymentMethodSchemaDef = {
    name: {type: "string", required: true, min: 1, max: POS_PAYMENT_METHOD_NAME_MAX},
    type: {type: "enum", required: true, options: posPaymentMethodTypes},
    sequence: {type: "number", required: false, min: 0},
    /** Comma-separated cash tender chips, e.g. "0.1,0.2,0.5,1,5,10,20,50,100". Empty → defaults. */
    cashQuickAmounts: {type: "string", required: false, max: POS_PAYMENT_METHOD_CASH_QUICK_AMOUNTS_MAX},
    /** Derived from type: card turns the till terminal on. Not a form toggle. */
    terminalEnabled: {type: "boolean", required: false},
    terminalProvider: {type: "enum", required: false, options: posTerminalProviders, requiredWhen: cardTerminalRequired},
    /** Bridge scheme for local_http provider. Defaults to http. */
    terminalProtocol: {type: "enum", required: false, options: posTerminalProtocols, requiredWhen: cardTerminalRequired},
    terminalHost: {type: "string", required: false, max: POS_PAYMENT_METHOD_TERMINAL_HOST_MAX, requiredWhen: cardTerminalRequired},
    terminalPort: {type: "number", required: false, min: 1, max: 65535, requiredWhen: cardTerminalRequired},
    terminalId: {type: "string", required: false, max: POS_PAYMENT_METHOD_TERMINAL_ID_MAX, requiredWhen: cardTerminalRequired},
    terminalPath: {type: "string", required: false, max: POS_PAYMENT_METHOD_TERMINAL_PATH_MAX, requiredWhen: cardTerminalRequired},
} as const;

export type CreatePosPaymentMethodFormType = InferCreateForm<typeof PosPaymentMethodSchemaDef>;
export type EditPosPaymentMethodFormType = InferEditForm<typeof PosPaymentMethodSchemaDef>;
