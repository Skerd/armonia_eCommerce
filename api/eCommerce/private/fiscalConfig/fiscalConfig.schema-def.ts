import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const fiscalEnvironmentOptions = ["test", "production"] as const;
export type FiscalEnvironment = (typeof fiscalEnvironmentOptions)[number];

export const fiscalTcrTypeOptions = ["REGULAR", "VENDING"] as const;
export type FiscalTcrType = (typeof fiscalTcrTypeOptions)[number];

export const FISCAL_CONFIG_NAME_MAX = 128;
export const FISCAL_CONFIG_NIPT_MAX = 32;
export const FISCAL_CONFIG_CIS_CODE_MAX = 50;
export const FISCAL_CONFIG_TCR_INT_ID_MAX = 32;
export const FISCAL_CONFIG_URL_MAX = 1024;
export const FISCAL_CONFIG_SELLER_NAME_MAX = 128;
export const FISCAL_CONFIG_SELLER_ADDRESS_MAX = 256;
export const FISCAL_CONFIG_SELLER_TOWN_MAX = 128;
export const FISCAL_CONFIG_SELLER_COUNTRY_MAX = 3;
export const FISCAL_CONFIG_CERTIFICATE_PASSWORD_MAX = 128;

export const FiscalConfigSchemaDef = {
    name: {type: "string", required: true, min: 1, max: FISCAL_CONFIG_NAME_MAX},
    /** Seller NUIS/NIPT — defaults to company.vat when empty at runtime. */
    nipt: {type: "string", required: false, max: FISCAL_CONFIG_NIPT_MAX},
    softCode: {type: "string", required: true, min: 1, max: FISCAL_CONFIG_CIS_CODE_MAX},
    maintainerCode: {type: "string", required: false, max: FISCAL_CONFIG_CIS_CODE_MAX},
    businessUnitCode: {type: "string", required: true, min: 1, max: FISCAL_CONFIG_CIS_CODE_MAX},
    operatorCode: {type: "string", required: true, min: 1, max: FISCAL_CONFIG_CIS_CODE_MAX},
    /** CIS-assigned TCR code (filled after RegisterTCR). */
    tcrCode: {type: "string", required: false, max: FISCAL_CONFIG_CIS_CODE_MAX},
    /** Internal TCR id sent on RegisterTCR (TCRIntID). */
    tcrIntId: {type: "string", required: false, max: FISCAL_CONFIG_TCR_INT_ID_MAX},
    tcrType: {type: "enum", required: false, options: fiscalTcrTypeOptions},
    fiscalizationUrl: {type: "string", required: true, min: 1, max: FISCAL_CONFIG_URL_MAX},
    einvoiceUrl: {type: "string", required: true, min: 1, max: FISCAL_CONFIG_URL_MAX},
    selfcareUrl: {type: "string", required: true, min: 1, max: FISCAL_CONFIG_URL_MAX},
    proxyUrl: {type: "string", required: false, max: FISCAL_CONFIG_URL_MAX},
    sellerName: {type: "string", required: false, max: FISCAL_CONFIG_SELLER_NAME_MAX},
    sellerAddress: {type: "string", required: false, max: FISCAL_CONFIG_SELLER_ADDRESS_MAX},
    sellerTown: {type: "string", required: false, max: FISCAL_CONFIG_SELLER_TOWN_MAX},
    /** ISO country code for fiscalization (e.g. AL). */
    sellerCountry: {type: "string", required: false, max: FISCAL_CONFIG_SELLER_COUNTRY_MAX},
    isVatRegistered: {type: "boolean", required: false},
    environment: {type: "enum", required: false, options: fiscalEnvironmentOptions},
    /** PKCS#12 (.p12 / .pfx) stored as media. Empty array clears it. */
    certificate: {type: "mediaIdArray", required: false},
    /** Password for the stored PKCS#12. Write-only; blank on edit leaves the stored password. */
    certificatePassword: {type: "string", required: false, max: FISCAL_CONFIG_CERTIFICATE_PASSWORD_MAX},
} as const;

export type CreateFiscalConfigFormType = InferCreateForm<typeof FiscalConfigSchemaDef>;
export type EditFiscalConfigFormType = InferEditForm<typeof FiscalConfigSchemaDef>;
