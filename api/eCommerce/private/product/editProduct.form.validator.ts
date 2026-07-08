import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductSchemaDef} from "./product.schema-def";

export function editProductFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(ProductSchemaDef, languageCode, form, permissions, readPermissions);
}
