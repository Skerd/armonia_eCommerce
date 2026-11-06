import {z} from "zod";
import {isLocalDateZod, isObjectIdZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

/** `/fiscalizePosOrder` and `/registerEinvoice`: the POS order, and optionally the fiscal config to use instead of the till's. */
export function posOrderFiscalFormSchema(languageCode: string, form: any = null) {
    return z.object({
        posOrderId: isObjectIdZod(form?.["posOrderIdLabel"] ?? "posOrderId", languageCode),
        fiscalConfigId: isObjectIdZod(form?.["fiscalConfigIdLabel"] ?? "fiscalConfigId", languageCode).optional(),
    });
}

export type PosOrderFiscalFormType = z.infer<ReturnType<typeof posOrderFiscalFormSchema>>;

/** `/registerTcr`: CIS validity dates are calendar days. */
export function registerTcrFormSchema(languageCode: string, form: any = null) {
    return z.object({
        fiscalConfigId: isObjectIdZod(form?.["fiscalConfigIdLabel"] ?? "fiscalConfigId", languageCode),
        validFrom: isLocalDateZod(form?.["validFromLabel"] ?? "validFrom", languageCode).optional(),
        validTo: isLocalDateZod(form?.["validToLabel"] ?? "validTo", languageCode).optional(),
    });
}

export type RegisterTcrFormType = z.infer<ReturnType<typeof registerTcrFormSchema>>;

export function getTaxpayerFormSchema(languageCode: string, form: any = null) {
    return z.object({
        fiscalConfigId: isObjectIdZod(form?.["fiscalConfigIdLabel"] ?? "fiscalConfigId", languageCode),
        tin: stringMinMaxLengthZod(form?.["tinLabel"] ?? "tin", 1, 20, languageCode),
    });
}

export type GetTaxpayerFormType = z.infer<ReturnType<typeof getTaxpayerFormSchema>>;
