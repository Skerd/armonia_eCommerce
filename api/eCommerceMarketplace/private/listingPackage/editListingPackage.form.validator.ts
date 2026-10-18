import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingPackageSchemaDef} from "./listingPackage.schema-def";

export function editListingPackageFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(ListingPackageSchemaDef, languageCode, form, permissions, readPermissions);
}
