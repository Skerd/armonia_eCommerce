import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingFlagSchemaDef} from "./listingFlag.schema-def";

export function createListingFlagFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ListingFlagSchemaDef, languageCode, form);
}
