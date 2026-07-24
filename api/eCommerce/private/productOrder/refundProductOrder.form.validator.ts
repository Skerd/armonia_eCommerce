import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type RefundProductOrderFormType = {
    _id: string;
    /** Partial refund amount; omit to refund the full remaining amount. */
    amount?: number;
    reason?: string;
};

export function refundProductOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode).optional(),
        reason: z.string().max(2000).optional(),
    });
}
