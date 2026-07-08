import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CategorySchemaDef} from "./category.schema-def";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function createCategoryFormSchema(languageCode: string, form: any = null) {
    const base = buildCreateZodSchema(CategorySchemaDef, languageCode, form);
    return base
        .extend({
            parentId: isObjectIdZod(form?.["parentIdLabel"] ?? "parentId", languageCode).optional(),
        })
        .omit({parent: true});
}
