import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type OpenPosSessionFormType = {
    configId: string;
    openingBalance?: number;
    notes?: string;
};

export function openPosSessionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        configId: isObjectIdZod(form?.["configIdLabel"] ?? "configId", languageCode),
        openingBalance: greaterThanOrEqualZod(form?.["openingBalanceLabel"] ?? "openingBalance", 0, languageCode).optional(),
        notes: z.string().max(2000).optional(),
    });
}
