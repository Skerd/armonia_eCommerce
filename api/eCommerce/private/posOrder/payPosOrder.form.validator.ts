import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type PayPosOrderLineFormType = {
    productId: string;
    variantId?: string;
    quantity: number;
    unitPrice?: number;
    discountPercent?: number;
};

export type PayPosOrderPaymentFormType = {
    paymentMethodId: string;
    amount: number;
    terminalAuthCode?: string;
    terminalReference?: string;
    terminalId?: string;
};

export type PayPosOrderFormType = {
    sessionId: string;
    customerId?: string;
    customerName?: string;
    note?: string;
    discountPercent?: number;
    lines: PayPosOrderLineFormType[];
    payments: PayPosOrderPaymentFormType[];
    /** Resume a held draft and convert it to paid. */
    heldOrderId?: string;
    /** Idempotency key — retries return the same paid order. */
    clientRequestId?: string;
    /** Required when config.pinForDiscount and any discount is applied. */
    managerPin?: string;
    /** Selected approving manager — PIN is verified only for this user. */
    managerId?: string;
};

export function payPosOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        sessionId: isObjectIdZod(form?.["sessionIdLabel"] ?? "sessionId", languageCode),
        customerId: isObjectIdZod(form?.["customerIdLabel"] ?? "customerId", languageCode).optional(),
        customerName: z.string().max(500).optional(),
        note: z.string().max(2000).optional(),
        discountPercent: greaterThanOrEqualZod(form?.["discountPercentLabel"] ?? "discountPercent", 0, languageCode).optional(),
        heldOrderId: isObjectIdZod(form?.["heldOrderIdLabel"] ?? "heldOrderId", languageCode).optional(),
        clientRequestId: z.string().trim().min(8).max(80).optional(),
        managerPin: z.string().min(1).max(64).optional(),
        managerId: isObjectIdZod(form?.["managerIdLabel"] ?? "managerId", languageCode).optional(),
        lines: z
            .array(
                z.object({
                    productId: isObjectIdZod(form?.["productIdLabel"] ?? "productId", languageCode),
                    variantId: isObjectIdZod(form?.["variantIdLabel"] ?? "variantId", languageCode).optional(),
                    quantity: greaterThanOrEqualZod(form?.["quantityLabel"] ?? "quantity", 0.0001, languageCode),
                    unitPrice: greaterThanOrEqualZod(form?.["unitPriceLabel"] ?? "unitPrice", 0, languageCode).optional(),
                    discountPercent: greaterThanOrEqualZod(form?.["lineDiscountPercentLabel"] ?? "discountPercent", 0, languageCode).optional(),
                }),
            )
            .min(1),
        payments: z
            .array(
                z.object({
                    paymentMethodId: isObjectIdZod(form?.["paymentMethodIdLabel"] ?? "paymentMethodId", languageCode),
                    amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode),
                    terminalAuthCode: z.string().max(120).optional(),
                    terminalReference: z.string().max(120).optional(),
                    terminalId: z.string().max(120).optional(),
                }),
            )
            .min(1),
    });
}
