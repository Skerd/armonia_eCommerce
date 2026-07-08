import { isObjectIdZod } from "../../../../../core/helpers/zodBuilder";
import { z } from "zod";

export function acceptOrderDeliveryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        deliveryId: isObjectIdZod(form?.["deliveryIdLabel"] ?? "deliveryId", languageCode),
    });
}
