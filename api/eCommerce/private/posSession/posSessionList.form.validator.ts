import {z} from "zod";
import {isEnumZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {RECENT_WHEN} from "../../../../helpers/recentWhen";

/** The POS sessions list: the table params plus the "When" quick filter. */
export function posSessionListFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        when: isEnumZod(form?.["whenLabel"] ?? "when", RECENT_WHEN, RECENT_WHEN.join(", "), languageCode).optional(),
    });
}

export type PosSessionListFormType = z.infer<ReturnType<typeof posSessionListFormSchema>>;
