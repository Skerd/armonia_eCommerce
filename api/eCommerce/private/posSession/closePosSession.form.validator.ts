import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod, stringMaxLengthZod, stringMinMaxLengthZod, trimmedZod} from "../../../../../core/helpers/zodBuilder";

export type ClosePosSessionFormType = {
    _id: string;
    closingBalance: number;
    notes?: string;
    /** Required when counted cash differs from expected cash. */
    differenceReason?: string;
};

export function closePosSessionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        closingBalance: greaterThanOrEqualZod(form?.["closingBalanceLabel"] ?? "closingBalance", 0, languageCode),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", 2000, languageCode).optional(),
        differenceReason: trimmedZod(stringMinMaxLengthZod(form?.["differenceReasonLabel"] ?? "differenceReason", 1, 2000, languageCode)).optional(),
    });
}
