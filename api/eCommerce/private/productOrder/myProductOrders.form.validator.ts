import {z} from "zod";
import {greaterThanOrEqualZod, inBetweenRangeZod} from "../../../../../core/helpers/zodBuilder";

export type MyProductOrdersFormType = {
    page?: number;
    limit?: number;
};

export function myProductOrdersFormSchema(languageCode: string | undefined, form: any = null) {
    const lc = languageCode ?? "";
    return z.object({
        page: greaterThanOrEqualZod(form?.["pageLabel"] ?? "page", 1, lc).optional(),
        limit: inBetweenRangeZod(form?.["limitLabel"] ?? "limit", 1, 50, lc).optional(),
    });
}
