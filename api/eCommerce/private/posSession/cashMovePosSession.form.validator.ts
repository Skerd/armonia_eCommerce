import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod, isEnumZod, stringMaxLengthZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

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
        type: isEnumZod(form?.["typeLabel"] ?? "type", posCashMoveTypes, posCashMoveTypes.join(", "), languageCode),
        amount: greaterThanOrEqualZod(form?.["amountLabel"] ?? "amount", 0.01, languageCode),
        reason: stringMaxLengthZod(form?.["reasonLabel"] ?? "reason", 2000, languageCode).optional(),
        managerPin: stringMinMaxLengthZod(form?.["managerPinLabel"] ?? "managerPin", 1, 64, languageCode).optional(),
        managerId: isObjectIdZod(form?.["managerIdLabel"] ?? "managerId", languageCode).optional(),
    });
}
