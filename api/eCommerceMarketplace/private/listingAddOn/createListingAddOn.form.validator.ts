import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingAddOnSchemaDef} from "./listingAddOn.schema-def";

export function createListingAddOnFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ListingAddOnSchemaDef, languageCode, form);
}
