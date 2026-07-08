import { z } from "zod";
import { withTableFormValidator } from "../../../../../core/utilities/zod/shared.validator";

export function orderMilestoneFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        orderId: z.string().optional(),
    });
}
