import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FiscalConfigSchemaDef} from "./fiscalConfig.schema-def";

export function createFiscalConfigFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(FiscalConfigSchemaDef, languageCode, form);
}
