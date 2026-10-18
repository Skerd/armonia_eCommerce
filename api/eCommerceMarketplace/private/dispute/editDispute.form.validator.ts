import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";

/** Disputes are not edited via PATCH; lifecycle uses `/startReview`, `/resolve`, `/close`. */
export function editDisputeFormSchema(languageCode: string | undefined, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return validateSingleForm(languageCode, form);
}
