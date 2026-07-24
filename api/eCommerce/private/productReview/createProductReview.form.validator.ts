import {z} from "zod";
import {inBetweenRangeZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function createProductReviewFormSchema(languageCode: string, form: any = null) {
    return z.object({
        orderId: isObjectIdZod(form?.["orderIdLabel"] ?? "orderId", languageCode),
        productId: isObjectIdZod(form?.["productIdLabel"] ?? "productId", languageCode),
        rating: inBetweenRangeZod(form?.["ratingLabel"] ?? "rating", 1, 5, languageCode),
        title: z.string().max(200).optional(),
        comment: z.string().max(4000).optional(),
    });
}
