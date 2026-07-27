import {z} from "zod";
import {isMatchZod, isObjectIdZod, stringMinLengthZod} from "../../../../../core/helpers/zodBuilder";

export function changeManagerPinFormSchema(languageCode: string, form: any = null) {
    const base = z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        currentPin: stringMinLengthZod(form?.["currentPinLabel"] || "currentPin", 4, languageCode).max(64),
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
