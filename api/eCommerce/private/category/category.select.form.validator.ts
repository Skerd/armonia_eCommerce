import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function categorySelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        parentId: isObjectIdZod(form?.["parentIdLabel"] ?? "parentId", languageCode).optional(),
        excludeCategoryId: isObjectIdZod(form?.["excludeCategoryIdLabel"] ?? "excludeCategoryId", languageCode).optional(),
    })
}
