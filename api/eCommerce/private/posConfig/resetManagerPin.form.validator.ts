import {z} from "zod";
import {isMatchZod, notEmptyZod, stringMinLengthZod} from "../../../../../core/helpers/zodBuilder";

export function resetManagerPinFormSchema(languageCode: string, form: any = null) {
    const base = z.object({
        resetCode: notEmptyZod(form?.["resetCodeLabel"] || "resetCode", languageCode),
        pin: stringMinLengthZod(form?.["pinLabel"] || "pin", 4, languageCode).max(64),
        confirmPin: stringMinLengthZod(form?.["confirmPinLabel"] || "confirmPin", 4, languageCode).max(64),
    });
    return isMatchZod(
        "confirmPin",
        form?.["confirmPinLabel"] || "confirmPin",
        "pin",
        form?.["pinLabel"] || "pin",
        languageCode,
    )(base);
}
