import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductAttributeSchemaDef} from "./productAttribute.schema-def";

export function createProductAttributeFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProductAttributeSchemaDef, languageCode, form);
}
