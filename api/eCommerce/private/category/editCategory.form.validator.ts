import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CategorySchemaDef} from "./category.schema-def";

export function editCategoryFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(CategorySchemaDef, languageCode, form, permissions, readPermissions);
}
