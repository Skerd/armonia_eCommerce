import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

export function pausePosConfigFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        pauseReason: stringMaxLengthZod(form?.["pauseReasonLabel"] ?? "pauseReason", 500, languageCode)
            .optional()
            .nullable(),
    });
}

export function pauseAllPosConfigsFormSchema(languageCode: string, form: any = null) {
    return z.object({
        pauseReason: stringMaxLengthZod(form?.["pauseReasonLabel"] ?? "pauseReason", 500, languageCode)
            .optional()
            .nullable(),
    });
}

export function resumeAllPosConfigsFormSchema(_languageCode: string, _form: any = null) {
    return z.object({});
}

export function companyLockStatusFormSchema(_languageCode: string, _form: any = null) {
    return z.object({});
}
