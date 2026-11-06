import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod, stringMaxLengthZod, stringMinMaxLengthZod, trimmedZod, arrayMinItemsZod} from "../../../../../core/helpers/zodBuilder";

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
        customerName: stringMaxLengthZod(form?.["customerNameLabel"] ?? "customerName", 500, languageCode).optional(),
        note: stringMaxLengthZod(form?.["noteLabel"] ?? "note", 2000, languageCode).optional(),
        discountPercent: greaterThanOrEqualZod(form?.["discountPercentLabel"] ?? "discountPercent", 0, languageCode).optional(),
        heldOrderId: isObjectIdZod(form?.["heldOrderIdLabel"] ?? "heldOrderId", languageCode).optional(),
        clientRequestId: trimmedZod(stringMinMaxLengthZod(form?.["clientRequestIdLabel"] ?? "clientRequestId", 8, 80, languageCode)).optional(),
        managerPin: stringMinMaxLengthZod(form?.["managerPinLabel"] ?? "managerPin", 1, 64, languageCode).optional(),
        managerId: isObjectIdZod(form?.["managerIdLabel"] ?? "managerId", languageCode).optional(),
        lines: arrayMinItemsZod(form?.["linesLabel"] ?? "lines", 1, languageCode, z.object({
            productId: isObjectIdZod(form?.["productIdLabel"] ?? "productId", languageCode),
            variantId: isObjectIdZod(form?.["variantIdLabel"] ?? "variantId", languageCode).optional(),
            quantity: greaterThanOrEqualZod(form?.["quantityLabel"] ?? "quantity", 0.0001, languageCode),
            unitPrice: greaterThanOrEqualZod(form?.["unitPriceLabel"] ?? "unitPrice", 0, languageCode).optional(),
            discountPercent: greaterThanOrEqualZod(form?.["lineDiscountPercentLabel"] ?? "discountPercent", 0, languageCode).optional(),
        })),
        payments: arrayMinItemsZod(form?.["paymentsLabel"] ?? "payments", 1, languageCode, z.object({
            paymentMethodId: isObjectIdZod(form?.["paymentMethodIdLabel"] ?? "paymentMethodId", languageCode),
            amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode),
            terminalAuthCode: stringMaxLengthZod(form?.["terminalAuthCodeLabel"] ?? "terminalAuthCode", 120, languageCode).optional(),
            terminalReference: stringMaxLengthZod(form?.["terminalReferenceLabel"] ?? "terminalReference", 120, languageCode).optional(),
            terminalId: stringMaxLengthZod(form?.["terminalIdLabel"] ?? "terminalId", 120, languageCode).optional(),
        })),
    });
}
