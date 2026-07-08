import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductSchemaDef} from "./product.schema-def";

export function createProductFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProductSchemaDef, languageCode, form);
}
