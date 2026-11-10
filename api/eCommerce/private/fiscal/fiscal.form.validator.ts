import {z} from "zod";
import {isObjectIdZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

/** `/fiscalizePosOrder` and `/registerEinvoice`: the POS order, and optionally the fiscal config to use instead of the till's. */
export function posOrderFiscalFormSchema(languageCode: string, form: any = null) {
    return z.object({
        posOrderId: isObjectIdZod(form?.["posOrderIdLabel"] ?? "posOrderId", languageCode),
        fiscalConfigId: isObjectIdZod(form?.["fiscalConfigIdLabel"] ?? "fiscalConfigId", languageCode).optional(),
    });
}

export type PosOrderFiscalFormType = z.infer<ReturnType<typeof posOrderFiscalFormSchema>>;

export function getTaxpayerFormSchema(languageCode: string, form: any = null) {
    return z.object({
        fiscalConfigId: isObjectIdZod(form?.["fiscalConfigIdLabel"] ?? "fiscalConfigId", languageCode),
        tin: stringMinMaxLengthZod(form?.["tinLabel"] ?? "tin", 1, 20, languageCode),
    });
}

export type GetTaxpayerFormType = z.infer<ReturnType<typeof getTaxpayerFormSchema>>;
