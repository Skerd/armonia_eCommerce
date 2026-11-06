import {z} from "zod";
import {isMatchZod, isObjectIdZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

export function setManagerPinFormSchema(languageCode: string, form: any = null) {
    const base = z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
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
