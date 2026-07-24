import {z} from "zod";
import {notEmptyZod} from "../../../../../core/helpers/zodBuilder";

export type InitCheckoutFormType = {idempotencyKey: string};

export function initCheckoutFormSchema(languageCode: string, form: any = null) {
    return z.object({
        idempotencyKey: notEmptyZod(form?.["idempotencyKeyLabel"] ?? "idempotencyKey", languageCode),
    });
}
