import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductReviewSchemaDef} from "./productReview.schema-def";

export function createProductReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProductReviewSchemaDef, languageCode, form);
}
