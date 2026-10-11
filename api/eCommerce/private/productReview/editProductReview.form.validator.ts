import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProductReviewSchemaDef} from "./productReview.schema-def";

export function editProductReviewFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(ProductReviewSchemaDef, languageCode, form, permissions, readPermissions);
}
