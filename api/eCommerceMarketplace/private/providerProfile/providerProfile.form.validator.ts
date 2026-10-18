import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

/** List body: optional owner scope (account “my provider profile”) — AND’d with FilterBuilder DSL. */
export function providerProfileFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        userId: isObjectIdZod(form?.["userIdLabel"] ?? "userId", languageCode).optional(),
    });
}
