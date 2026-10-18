import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {ResolveListingFlagSchemaDef} from "./listingFlag.schema-def";

/** Body for POST /api/eCommerceMarketplace/listingFlag/resolve and /dismiss */
export function resolveListingFlagActionFormSchema(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend(
        buildCreateZodSchema(ResolveListingFlagSchemaDef, languageCode, form).shape,
    );
}
