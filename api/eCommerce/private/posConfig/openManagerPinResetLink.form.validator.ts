import {z} from "zod";
import {notEmptyZod} from "../../../../../core/helpers/zodBuilder";

export function openManagerPinResetLinkFormSchema(languageCode: string, form: any = null) {
    return z.object({
        resetCode: notEmptyZod(form?.["resetCodeLabel"] || "resetCode", languageCode),
    });
}
