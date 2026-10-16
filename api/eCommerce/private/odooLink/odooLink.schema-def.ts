import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ODOO_MODEL_MAX = 128;
export const LOCAL_MODEL_MAX = 128;

export const OdooLinkSchemaDef = {
    odooModel: {type: "string", required: true, min: 1, max: ODOO_MODEL_MAX},
    odooId: {type: "number", required: true, min: 1},
    localModel: {type: "string", required: true, min: 1, max: LOCAL_MODEL_MAX},
    localId: {type: "objectId", required: true},
} as const;

export type CreateOdooLinkFormType = InferCreateForm<typeof OdooLinkSchemaDef>;
