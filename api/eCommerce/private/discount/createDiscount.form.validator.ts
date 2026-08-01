import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {DiscountSchemaDef} from "./discount.schema-def";
import {refineBuyXGetY} from "./buyXGetY.refine";

export function createDiscountFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(DiscountSchemaDef, languageCode, form).superRefine(refineBuyXGetY(languageCode, form));
}
