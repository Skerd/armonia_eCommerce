import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SavedSearchSchemaDef} from "./savedSearch.schema-def";

export function createSavedSearchFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SavedSearchSchemaDef, languageCode, form);
}
