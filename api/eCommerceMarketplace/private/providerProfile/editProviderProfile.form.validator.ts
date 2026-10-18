import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProviderProfileSchemaDef} from "./providerProfile.schema-def";

export function editProviderProfileFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(ProviderProfileSchemaDef, languageCode, form, permissions, readPermissions);
}
