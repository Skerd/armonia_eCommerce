import {z} from "zod";
import {isObjectIdZod, greaterThanOrEqualZod} from "../../../../../core/helpers/zodBuilder";

export function chargePosTerminalFormSchema(languageCode: string, form: any = null) {
    return z.object({
        sessionId: isObjectIdZod(form?.["sessionIdLabel"] ?? "sessionId", languageCode),
        paymentMethodId: isObjectIdZod(form?.["paymentMethodIdLabel"] ?? "paymentMethodId", languageCode),
        amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode),
        currency: z.string().min(1).max(8).optional(),
        reference: z.string().max(120).optional(),
    });
}

export type ChargePosTerminalFormType = z.infer<ReturnType<typeof chargePosTerminalFormSchema>>;
