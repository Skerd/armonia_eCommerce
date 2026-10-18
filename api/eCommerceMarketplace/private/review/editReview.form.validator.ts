import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";

/** Reviews are not edited via PATCH; create-only with admin delete/restore. */
export function editReviewFormSchema(languageCode: string | undefined, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return validateSingleForm(languageCode, form);
}
