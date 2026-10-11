import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

/** List body: optional owner scope (account “my addresses”) — AND’d with FilterBuilder DSL. */
export function customerAddressFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        customerId: isObjectIdZod(form?.["customerIdLabel"] ?? "customerId", languageCode).optional(),
    });
}
