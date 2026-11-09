import {z} from "zod";
import {isFormatZod, isObjectIdZod, trimmedZod} from "../../../../../core/helpers/zodBuilder";

/** The NSLF (IIC) the till computes: an MD5 digest, 32 hexadecimal characters (CIS shows it in capitals). */
export const POS_FISCAL_NSLF_PATTERN = /^[0-9A-Fa-f]{32}$/;
/** The NIVF (FIC) and the e-invoice EIC that CIS returns are UUIDs. */
export const POS_FISCAL_UUID_PATTERN = /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/;
const NSLF_FORMAT_HINT = "0123456789ABCDEF0123456789ABCDEF";
const UUID_FORMAT_HINT = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

/**
 * `recordFiscalCodes` (D98): the codes staff found in the CIS portal for a till sale whose CIS answer was lost.
 * The NSLF and NIVF are required, the EIC only when an e-invoice was registered too.
 */
export function recordPosOrderFiscalCodesFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        nslf: trimmedZod(isFormatZod(form?.["nslfLabel"] ?? "nslf", POS_FISCAL_NSLF_PATTERN, NSLF_FORMAT_HINT, languageCode)),
        nivf: trimmedZod(isFormatZod(form?.["nivfLabel"] ?? "nivf", POS_FISCAL_UUID_PATTERN, UUID_FORMAT_HINT, languageCode)),
        eic: trimmedZod(isFormatZod(form?.["eicLabel"] ?? "eic", POS_FISCAL_UUID_PATTERN, UUID_FORMAT_HINT, languageCode)).optional(),
    });
}

export type RecordPosOrderFiscalCodesFormType = z.infer<ReturnType<typeof recordPosOrderFiscalCodesFormSchema>>;
