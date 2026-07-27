import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export const posCashMoveTypes = ["in", "out"] as const;

export type CashMovePosSessionFormType = {
    _id: string;
    type: (typeof posCashMoveTypes)[number];
    amount: number;
    reason?: string;
    managerPin?: string;
    /** Selected approving manager — PIN is verified only for this user. */
    managerId?: string;
};

export function cashMovePosSessionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        type: z.enum(posCashMoveTypes),
        amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode),
        reason: z.string().max(2000).optional(),
        managerPin: z.string().min(1).max(64).optional(),
        managerId: isObjectIdZod(form?.["managerIdLabel"] ?? "managerId", languageCode).optional(),
    });
}
