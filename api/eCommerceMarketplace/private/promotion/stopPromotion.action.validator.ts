import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {StopPromotionSchemaDef} from "./promotion.schema-def";

/** Body for POST /api/eCommerceMarketplace/promotion/stop */
export function validatePromotionStopForm(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend(
        buildCreateZodSchema(StopPromotionSchemaDef, languageCode, form).shape,
    );
}
