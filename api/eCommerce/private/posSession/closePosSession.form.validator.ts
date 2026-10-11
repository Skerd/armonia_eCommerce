import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

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
        notes: z.string().max(2000).optional(),
        differenceReason: z.string().trim().min(1).max(2000).optional(),
    });
}
