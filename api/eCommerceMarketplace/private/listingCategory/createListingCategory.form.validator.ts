import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingCategorySchemaDef} from "./listingCategory.schema-def";

export function createListingCategoryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ListingCategorySchemaDef, languageCode, form);
}
