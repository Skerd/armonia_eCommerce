import {z} from "zod";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function listingSelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        activeOnly: z.boolean().optional(),
    });
}
