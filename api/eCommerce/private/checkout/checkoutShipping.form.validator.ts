import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type CheckoutShippingFormType = {
    checkoutId: string;
    rateIndex: number;
};

export function checkoutShippingFormSchema(languageCode: string, form: any = null) {
    return z.object({
        checkoutId: isObjectIdZod(form?.["checkoutIdLabel"] ?? "checkoutId", languageCode),
        rateIndex: greaterThanOrEqualZod(form?.["rateIndexLabel"] ?? "rateIndex", 0, languageCode),
    });
}
