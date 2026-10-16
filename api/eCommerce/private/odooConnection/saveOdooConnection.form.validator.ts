import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {OdooConnectionSchemaDef} from "./odooConnection.schema-def";

export function saveOdooConnectionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(OdooConnectionSchemaDef, languageCode, form);
}

export function odooConnectionReadFormSchema(_languageCode: string, _form: any = null) {
    return z.object({});
}
