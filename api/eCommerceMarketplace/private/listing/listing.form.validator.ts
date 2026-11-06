import {z} from "zod";
import {isBooleanZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function listingTableFormSchema(languageCode: string | undefined, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        featuredOnly: isBooleanZod(form?.["featuredOnlyLabel"] ?? "featuredOnly", languageCode).optional(),
    });
}
