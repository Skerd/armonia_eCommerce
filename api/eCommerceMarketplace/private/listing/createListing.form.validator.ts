import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ListingSchemaDef} from "./listing.schema-def";

export function createListingFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ListingSchemaDef, languageCode, form);
}
