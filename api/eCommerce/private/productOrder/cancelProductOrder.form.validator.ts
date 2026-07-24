import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type CancelProductOrderFormType = {
    _id: string;
    reason?: string;
};

export function cancelProductOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        reason: z.string().max(2000).optional(),
    });
}
