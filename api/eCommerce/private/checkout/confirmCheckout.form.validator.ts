import {z} from "zod";
import {isEmailZod, isObjectIdZod, isStringZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

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
        phone: isStringZod(form?.["phoneLabel"] ?? "phone", languageCode).optional(),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", 2000, languageCode).optional(),
    });
}
