import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {OdooConnectionSchemaDef} from "./odooConnection.schema-def";

export function saveOdooConnectionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(OdooConnectionSchemaDef, languageCode, form);
}
