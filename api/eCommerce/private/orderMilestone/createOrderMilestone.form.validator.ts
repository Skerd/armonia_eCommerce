import { isObjectIdZod, nonNegativeZod } from "../../../../../core/helpers/zodBuilder";
import { z } from "zod";

export function createOrderMilestoneFormSchema(languageCode: string, form: any = null) {
    return z.object({
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode),
        name: z.string().min(1, "Name is required"),
        amount: nonNegativeZod(form?.["amountLabel"] ?? "amount", languageCode),
        currencyId: isObjectIdZod(form?.["currencyIdLabel"] ?? "currencyId", languageCode),
        orderIndex: z.number().int().min(0).optional(),
    });
}
