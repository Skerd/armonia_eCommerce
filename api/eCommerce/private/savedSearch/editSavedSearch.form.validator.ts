import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SavedSearchSchemaDef} from "./savedSearch.schema-def";

export function editSavedSearchFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(SavedSearchSchemaDef, languageCode, form, permissions, readPermissions);
}
