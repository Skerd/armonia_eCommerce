import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FiscalConfigSchemaDef} from "./fiscalConfig.schema-def";

export function editFiscalConfigFormSchema(languageCode: string,form: any = null,permissions: Record<string, unknown> = {},readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(FiscalConfigSchemaDef, languageCode, form, permissions, readPermissions);
}
