import { isObjectIdZod } from "../../../../../core/helpers/zodBuilder";
import { z } from "zod";

export function createOrderDeliveryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode),
        message: z.string().optional(),
        attachmentIds: z.array(z.string()).optional(),
    });
}
