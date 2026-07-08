import { isObjectIdZod } from "../../../../../core/helpers/zodBuilder";
import { z } from "zod";

export function getOrderChannelFormSchema(languageCode: string, form: any = null) {
    return z.object({
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode),
    });
}
