import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingCategorySchemaDef} from "./listingCategory.schema-def";

export function editListingCategoryFormSchema(languageCode: string,form: any = null,permissions: Record<string, unknown> = {},readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(ListingCategorySchemaDef, languageCode, form, permissions, readPermissions);
}
