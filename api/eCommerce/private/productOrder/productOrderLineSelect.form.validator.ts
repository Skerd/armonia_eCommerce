import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export type ProductOrderLineSelectFormType = {
    productOrderId: string;
    name?: string;
};

export function productOrderLineSelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        productOrderId: isObjectIdZod(form?.["productOrderIdLabel"] ?? "productOrderId", languageCode),
    });
}
