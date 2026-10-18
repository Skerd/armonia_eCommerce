import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PromotionSchemaDef} from "./promotion.schema-def";

export function createPromotionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PromotionSchemaDef, languageCode, form);
}
