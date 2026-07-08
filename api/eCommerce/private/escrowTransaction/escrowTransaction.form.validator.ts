import { z } from "zod";
import { withTableFormValidator } from "../../../../../core/utilities/zod/shared.validator";

export function escrowTransactionFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        orderId: z.string().optional(),
        type: z.enum(["hold", "release", "refund", "fee"]).optional(),
    });
}
