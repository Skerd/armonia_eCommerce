import { isObjectIdZod } from "../../../../../core/helpers/zodBuilder";
import { withTableFormValidator } from "../../../../../core/utilities/zod/shared.validator";

export function savedSearchFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withTableFormValidator(languageCode, form, {
        id: isObjectIdZod(form?.["idLabel"] ?? "id", lc).optional(),
    });
}
