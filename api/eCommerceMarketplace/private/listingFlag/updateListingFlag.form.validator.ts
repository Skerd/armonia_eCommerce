import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {EditListingFlagSchemaDef} from "./listingFlag.schema-def";

export function updateListingFlagFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(EditListingFlagSchemaDef, languageCode, form, permissions, readPermissions);
}
