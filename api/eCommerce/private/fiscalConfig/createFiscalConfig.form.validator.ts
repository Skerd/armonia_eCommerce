import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FiscalConfigSchemaDef} from "./fiscalConfig.schema-def";
import {z} from "zod";

export function createFiscalConfigFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(FiscalConfigSchemaDef, languageCode, form).extend({
        certificateBase64: z.string().min(1).optional(),
        certificatePassword: z.string().min(1).max(256).optional(),
    });
}
