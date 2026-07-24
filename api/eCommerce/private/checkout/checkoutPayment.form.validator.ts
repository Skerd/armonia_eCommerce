import {z} from "zod";
import {isEnumZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export const CHECKOUT_PAYMENT_METHODS = ["stripe", "paypal", "cod", "bank_transfer"] as const;
export type CheckoutPaymentMethodType = (typeof CHECKOUT_PAYMENT_METHODS)[number];

export type CheckoutPaymentFormType = {
    checkoutId: string;
    paymentMethod: CheckoutPaymentMethodType;
};

export function checkoutPaymentFormSchema(languageCode: string, form: any = null) {
    return z.object({
        checkoutId: isObjectIdZod(form?.["checkoutIdLabel"] ?? "checkoutId", languageCode),
        paymentMethod: isEnumZod(
            form?.["paymentMethodLabel"] ?? "paymentMethod",
            CHECKOUT_PAYMENT_METHODS,
            "paymentMethod",
            languageCode,
        ),
    });
}
