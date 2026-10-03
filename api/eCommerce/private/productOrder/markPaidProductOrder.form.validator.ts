import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

/** Records an offline (cash on delivery / bank transfer) payment as received. */
export type MarkPaidProductOrderFormType = {
    _id: string;
    /** Bank reference, receipt number, etc. */
    reference?: string;
};

export function markPaidProductOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        reference: z.string().max(200).optional(),
    });
}
