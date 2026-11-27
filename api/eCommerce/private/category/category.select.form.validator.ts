import {isBooleanZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function categorySelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        excludeCategoryId: isObjectIdZod(form?.["excludeCategoryIdLabel"] ?? "excludeCategoryId", languageCode).optional(),
        topLevel: isBooleanZod(form?.["topLevelLabel"] ?? "topLevel", languageCode).optional(),
        inShopBranches: isBooleanZod(form?.["inShopBranchesLabel"] ?? "inShopBranches", languageCode).optional(),
    })
}
