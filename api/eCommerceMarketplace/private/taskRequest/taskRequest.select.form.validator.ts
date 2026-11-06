import {z} from "zod";
import {isBooleanZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";

export function taskRequestSelectFormSchema(languageCode: string, form: any = null) {
    return withSelectFormValidator(languageCode, form, {
        activeOnly: isBooleanZod(form?.["activeOnlyLabel"] ?? "activeOnly", languageCode).optional(),
    });
}
