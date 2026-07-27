import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type RefundPosOrderLineFormType = {
    /** Pos order line _id */
    lineId: string;
    quantity: number;
};

export type RefundPosOrderFormType = {
    _id: string;
    reason?: string;
    /** Full/partial amount refund when lines are omitted. */
    amount?: number;
    /** Line-level partial refund — restocks only selected qtys. */
    lines?: RefundPosOrderLineFormType[];
    managerPin?: string;
    /** Selected approving manager — PIN is verified only for this user. */
    managerId?: string;
};

export function refundPosOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        reason: z.string().max(2000).optional(),
        amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode).optional(),
        managerPin: z.string().min(1).max(64).optional(),
        managerId: isObjectIdZod(form?.["managerIdLabel"] ?? "managerId", languageCode).optional(),
        lines: z
            .array(
                z.object({
                    lineId: isObjectIdZod(form?.["lineIdLabel"] ?? "lineId", languageCode),
                    quantity: greaterThanOrEqualZod(form?.["quantityLabel"] ?? "quantity", 0.0001, languageCode),
                }),
            )
            .optional(),
    });
}
