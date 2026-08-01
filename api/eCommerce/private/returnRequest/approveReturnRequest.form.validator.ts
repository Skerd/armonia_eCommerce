import {z} from "zod";
import {
    greaterThanOrEqualZod,
    isObjectIdZod,
    stringMaxLengthZod,
} from "../../../../../core/helpers/zodBuilder";

export type ApproveReturnRequestFormType = {
    _id: string;
    refundAmount?: number;
    notes?: string;
};

export function approveReturnRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        refundAmount: greaterThanOrEqualZod(form?.["refundAmountLabel"] ?? "refundAmount", 0, languageCode).optional(),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", 2000, languageCode).optional(),
    });
}
