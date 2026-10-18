import {mustBeZod} from "../../../../../core/helpers/zodBuilder";
import {withSelectFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {z} from "zod";
import {orderStatuses} from "./order.schema-def";

export function orderSelectFormSchema(languageCode: string, form: any = null) {
    const lc = languageCode ?? "";
    return withSelectFormValidator(languageCode, form, {
        status: mustBeZod(form?.["statusLabel"] ?? "status", [...orderStatuses], lc).optional(),
        /** When true: completed orders for the current user that do not already have a review. */
        forReview: z.boolean().optional(),
    });
}
