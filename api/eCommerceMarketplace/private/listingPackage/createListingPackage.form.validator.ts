import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingPackageSchemaDef} from "./listingPackage.schema-def";

export function createListingPackageFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ListingPackageSchemaDef, languageCode, form);
}
