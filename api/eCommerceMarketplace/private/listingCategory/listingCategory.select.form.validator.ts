import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function listingCategorySelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        excludeCategoryId: isObjectIdZod(form?.["excludeCategoryIdLabel"] ?? "excludeCategoryId", languageCode).optional(),
    })
}
