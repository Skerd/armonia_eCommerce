import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {DiscountSchemaDef} from "./discount.schema-def";

export function createDiscountFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(DiscountSchemaDef, languageCode, form);
}
