import {z} from "zod";
import {isEmailZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type ConfirmCheckoutFormType = {
    checkoutId: string;
    email?: string;
    phone?: string;
    notes?: string;
};

export function confirmCheckoutFormSchema(languageCode: string, form: any = null) {
    return z.object({
        checkoutId: isObjectIdZod(form?.["checkoutIdLabel"] ?? "checkoutId", languageCode),
        email: isEmailZod(form?.["emailLabel"] ?? "email", languageCode).optional(),
        phone: z.string().optional(),
        notes: z.string().max(2000).optional(),
    });
}
