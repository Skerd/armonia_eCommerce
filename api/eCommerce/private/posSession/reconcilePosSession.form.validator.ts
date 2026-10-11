import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type ReconcilePosSessionFormType = {
    sessionId: string;
    countedCash?: number;
};

export function reconcilePosSessionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        sessionId: isObjectIdZod(form?.["sessionIdLabel"] ?? "sessionId", languageCode),
        countedCash: greaterThanOrEqualZod(form?.["countedCashLabel"] ?? "countedCash", 0, languageCode).optional(),
    });
}
