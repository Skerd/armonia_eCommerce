import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

/** List filtered to one order (`orderId`), as shown on the order sheet. */
export function orderDeliveryFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode).optional(),
    });
}
