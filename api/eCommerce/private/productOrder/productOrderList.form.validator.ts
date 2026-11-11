import {z} from "zod";
import {isEnumZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";

/** The list's "When" quick filter: placed on the company's today, this week (from Monday), this month, or before it. */
export const PRODUCT_ORDER_WHEN = ["today", "thisWeek", "thisMonth", "older"] as const;
export type ProductOrderWhen = (typeof PRODUCT_ORDER_WHEN)[number];

/** The product orders list: the table params plus the "When" quick filter. */
export function productOrderListFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        when: isEnumZod(form?.["whenLabel"] ?? "when", PRODUCT_ORDER_WHEN, PRODUCT_ORDER_WHEN.join(", "), languageCode).optional(),
    });
}

export type ProductOrderListFormType = z.infer<ReturnType<typeof productOrderListFormSchema>>;
