import {z} from "zod";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function listingTableFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        featuredOnly: z.boolean().optional(),
    });
}
