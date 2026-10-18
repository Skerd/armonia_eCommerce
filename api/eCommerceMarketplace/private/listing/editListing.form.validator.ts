import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingSchemaDef} from "./listing.schema-def";

export function editListingFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {},) {
    return buildEditZodSchema(ListingSchemaDef, languageCode, form, permissions, readPermissions);
}
