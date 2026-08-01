import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CategorySchemaDef} from "./category.schema-def";

export function createCategoryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CategorySchemaDef, languageCode, form);
}
