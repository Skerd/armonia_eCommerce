import {z} from "zod";
import {isEnumZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {RECENT_WHEN} from "../../../../helpers/recentWhen";

/** The stock movements list: the table params plus the "When" quick filter. */
export function inventoryMovementListFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        when: isEnumZod(form?.["whenLabel"] ?? "when", RECENT_WHEN, RECENT_WHEN.join(", "), languageCode).optional(),
    });
}

export type InventoryMovementListFormType = z.infer<ReturnType<typeof inventoryMovementListFormSchema>>;
