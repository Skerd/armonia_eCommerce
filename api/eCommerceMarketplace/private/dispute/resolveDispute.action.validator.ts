import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {ResolveDisputeSchemaDef} from "./dispute.schema-def";

/** Body for POST /api/eCommerceMarketplace/dispute/resolve */
export function resolveDisputeActionFormSchema(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend(
        buildCreateZodSchema(ResolveDisputeSchemaDef, languageCode, form).shape,
    );
}
