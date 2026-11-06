import {z} from "zod";
import {getValidationMessage, inBetweenRangeZod, isObjectIdZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

/** Storefront product reviews: the product by id or slug, paged. */
export function shopProductReviewsFormSchema(languageCode: string, form: any = null) {
    return z.object({
        id: isObjectIdZod(form?.["idLabel"] ?? "id", languageCode).optional(),
        slug: stringMinMaxLengthZod(form?.["slugLabel"] ?? "slug", 1, 300, languageCode).optional(),
        sellerCompanyId: isObjectIdZod(form?.["sellerCompanyIdLabel"] ?? "sellerCompanyId", languageCode).optional(),
        page: inBetweenRangeZod(form?.["pageLabel"] ?? "page", 1, 1000, languageCode).optional(),
        limit: inBetweenRangeZod(form?.["limitLabel"] ?? "limit", 1, 50, languageCode).optional(),
    }).refine((value) => Boolean(value.id || value.slug), {
        message: getValidationMessage("form", "oneOfRequired", [form?.["idLabel"] ?? "id", form?.["slugLabel"] ?? "slug"], languageCode),
        path: ["slug"],
    });
}

export type ShopProductReviewsFormType = z.infer<ReturnType<typeof shopProductReviewsFormSchema>>;
