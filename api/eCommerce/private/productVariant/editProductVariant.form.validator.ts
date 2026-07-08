import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductVariantSchemaDef} from "./productVariant.schema-def";

export function editProductVariantFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(ProductVariantSchemaDef, languageCode, form, permissions, readPermissions);
}
