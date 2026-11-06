import {z} from "zod";
import {isMatchZod, isObjectIdZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

export function changeManagerPinFormSchema(languageCode: string, form: any = null) {
    const base = z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        currentPin: stringMinMaxLengthZod(form?.["currentPinLabel"] || "currentPin", 4, 64, languageCode),
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
