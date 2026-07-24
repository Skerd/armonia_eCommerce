import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FiscalConfigSchemaDef} from "./fiscalConfig.schema-def";
import {z} from "zod";

export function editFiscalConfigFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(FiscalConfigSchemaDef, languageCode, form, permissions, readPermissions).extend({
        certificateBase64: z.string().min(1).optional(),
        certificatePassword: z.string().min(1).max(256).optional(),
        clearCertificate: z.boolean().optional(),
    });
}
