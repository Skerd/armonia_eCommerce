import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingAddOnSchemaDef} from "./listingAddOn.schema-def";

export function editListingAddOnFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(ListingAddOnSchemaDef, languageCode, form, permissions, readPermissions);
}
