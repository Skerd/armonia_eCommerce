import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ReturnRequestSchemaDef} from "./returnRequest.schema-def";
import {z} from "zod";

export function editReturnRequestFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    const base = buildEditZodSchema(ReturnRequestSchemaDef, languageCode, form, permissions, readPermissions);
    return base.extend({
        notes: z.string().optional(),
    });
}
