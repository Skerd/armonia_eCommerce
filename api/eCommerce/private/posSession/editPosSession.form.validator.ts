import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PosSessionSchemaDef} from "./posSession.schema-def";

/** Edit is notes-only in the UI; SchemaDef still validates if other create fields are sent. */
export function editPosSessionFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(PosSessionSchemaDef, languageCode, form, permissions, readPermissions);
}
