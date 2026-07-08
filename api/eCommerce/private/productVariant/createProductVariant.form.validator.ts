import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductVariantSchemaDef} from "./productVariant.schema-def";

export function createProductVariantFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProductVariantSchemaDef, languageCode, form);
}
