import {z} from "zod";
import {isObjectIdZod, greaterThanOrEqualZod, stringMaxLengthZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

export function chargePosTerminalFormSchema(languageCode: string, form: any = null) {
    return z.object({
        sessionId: isObjectIdZod(form?.["sessionIdLabel"] ?? "sessionId", languageCode),
        paymentMethodId: isObjectIdZod(form?.["paymentMethodIdLabel"] ?? "paymentMethodId", languageCode),
        amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode),
        currency: stringMinMaxLengthZod(form?.["currencyLabel"] ?? "currency", 1, 8, languageCode).optional(),
        reference: stringMaxLengthZod(form?.["referenceLabel"] ?? "reference", 120, languageCode).optional(),
    });
}

export type ChargePosTerminalFormType = z.infer<ReturnType<typeof chargePosTerminalFormSchema>>;
