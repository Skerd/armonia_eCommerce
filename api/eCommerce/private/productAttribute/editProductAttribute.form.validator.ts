import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductAttributeSchemaDef} from "./productAttribute.schema-def";

export function editProductAttributeFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(ProductAttributeSchemaDef, languageCode, form, permissions, readPermissions);
}
