import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function productSelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        productOrderId: isObjectIdZod(form?.["productOrderIdLabel"] ?? "productOrderId", languageCode).optional(),
    });
}
