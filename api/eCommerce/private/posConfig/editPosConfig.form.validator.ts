import {z} from "zod";
import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PosConfigSchemaDef} from "./posConfig.schema-def";

export function editPosConfigFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(PosConfigSchemaDef, languageCode, form, permissions, readPermissions).extend({
        managerPin: z.string().min(4).max(64).optional(),
        clearManagerPin: z.boolean().optional(),
    });
}
