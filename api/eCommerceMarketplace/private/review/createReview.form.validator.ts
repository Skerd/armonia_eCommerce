import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ReviewSchemaDef} from "./review.schema-def";

export function createReviewFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ReviewSchemaDef, languageCode, form);
}
