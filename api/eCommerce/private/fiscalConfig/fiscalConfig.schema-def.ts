import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const fiscalEnvironmentOptions = ["test", "production"] as const;
export type FiscalEnvironment = (typeof fiscalEnvironmentOptions)[number];

export const fiscalTcrTypeOptions = ["REGULAR", "VENDING"] as const;
export type FiscalTcrType = (typeof fiscalTcrTypeOptions)[number];

export const FiscalConfigSchemaDef = {
    name: {type: "string", required: true},
    /** Seller NUIS/NIPT — defaults to company.vat when empty at runtime. */
    nipt: {type: "string", required: false},
    softCode: {type: "string", required: true},
    maintainerCode: {type: "string", required: false},
    businessUnitCode: {type: "string", required: true},
    operatorCode: {type: "string", required: true},
    /** CIS-assigned TCR code (filled after RegisterTCR). */
    tcrCode: {type: "string", required: false},
    /** Internal TCR id sent on RegisterTCR (TCRIntID). */
    tcrIntId: {type: "string", required: false},
    tcrType: {type: "enum", required: false, options: fiscalTcrTypeOptions},
    fiscalizationUrl: {type: "string", required: true},
    einvoiceUrl: {type: "string", required: true},
    selfcareUrl: {type: "string", required: true},
    proxyUrl: {type: "string", required: false},
    sellerName: {type: "string", required: false},
    sellerAddress: {type: "string", required: false},
    sellerTown: {type: "string", required: false},
    /** ISO country code for fiscalization (e.g. AL). */
    sellerCountry: {type: "string", required: false},
    isVatRegistered: {type: "boolean", required: false},
    autoFiscalizePos: {type: "boolean", required: false},
    autoEinvoice: {type: "boolean", required: false},
    environment: {type: "enum", required: false, options: fiscalEnvironmentOptions},
    /** PKCS#12 (.p12) as base64 — write-only on create/edit. */
    certificateBase64: {type: "string", required: false},
    /** Certificate password — write-only. */
    certificatePassword: {type: "string", required: false},
    clearCertificate: {type: "boolean", required: false},
    isActive: {type: "boolean", required: false},
} as const;

export type CreateFiscalConfigFormType = InferCreateForm<typeof FiscalConfigSchemaDef>;
export type EditFiscalConfigFormType = InferEditForm<typeof FiscalConfigSchemaDef>;
