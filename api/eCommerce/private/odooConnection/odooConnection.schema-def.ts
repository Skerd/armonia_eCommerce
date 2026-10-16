import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ODOO_URL_MAX = 1024;
export const ODOO_DATABASE_MAX = 128;
export const ODOO_USERNAME_MAX = 256;
export const ODOO_API_KEY_MAX = 512;

export const OdooConnectionSchemaDef = {
    url: {type: "string", required: true, min: 1, max: ODOO_URL_MAX, format: "url"},
    database: {type: "string", required: true, min: 1, max: ODOO_DATABASE_MAX},
    username: {type: "string", required: true, min: 1, max: ODOO_USERNAME_MAX},
    apiKeyEncrypted: {type: "string", required: false, max: ODOO_API_KEY_MAX},
} as const;

export type SaveOdooConnectionFormType = InferCreateForm<typeof OdooConnectionSchemaDef>;
