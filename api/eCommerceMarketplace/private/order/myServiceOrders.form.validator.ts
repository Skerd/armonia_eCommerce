import {mustBeZod} from "../../../../../core/helpers/zodBuilder";
import {withPagedFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import type {PagedForm} from "../../../../../core/types/shared.types";
import {orderStatuses, type OrderStatus} from "./order.schema-def";

export type MyServiceOrdersFormType = PagedForm & {status?: OrderStatus};

export function myServiceOrdersFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return withPagedFormValidator(languageCode, form, {
        status: mustBeZod(form?.["statusLabel"] ?? "status", [...orderStatuses], lc).optional(),
    });
}
