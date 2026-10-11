import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {RETURN_REQUEST_NOTE_MAX} from "./returnRequest.schema-def";

export type RejectReturnRequestFormType = {
    _id: string;
    reason?: string;
};

export function rejectReturnRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        reason: stringMaxLengthZod(form?.["reasonLabel"] ?? "reason", RETURN_REQUEST_NOTE_MAX, languageCode).optional(),
    });
}
