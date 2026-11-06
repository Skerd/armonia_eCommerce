import {z} from "zod";
import {isMatchZod, notEmptyZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

export function resetManagerPinFormSchema(languageCode: string, form: any = null) {
    const base = z.object({
        resetCode: notEmptyZod(form?.["resetCodeLabel"] || "resetCode", languageCode),
        pin: stringMinMaxLengthZod(form?.["pinLabel"] || "pin", 4, 64, languageCode),
        confirmPin: stringMinMaxLengthZod(form?.["confirmPinLabel"] || "confirmPin", 4, 64, languageCode),
    });
    return isMatchZod(
        "confirmPin",
        form?.["confirmPinLabel"] || "confirmPin",
        "pin",
        form?.["pinLabel"] || "pin",
        languageCode,
    )(base);
}
