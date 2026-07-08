import { isObjectIdZod } from "../../../../../core/helpers/zodBuilder";
import { z } from "zod";

export function createOrderRevisionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        deliveryId: isObjectIdZod(form?.["deliveryIdLabel"] ?? "deliveryId", languageCode),
        reason: z.string().min(1, "Reason is required"),
    });
}
