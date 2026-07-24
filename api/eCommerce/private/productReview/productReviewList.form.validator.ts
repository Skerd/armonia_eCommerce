import {z} from "zod";

export function productReviewListFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        page: z.coerce.number().optional(),
        limit: z.coerce.number().optional(),
        productId: z.string().optional(),
        orderId: z.string().optional(),
        rating: z.coerce.number().min(1).max(5).optional(),
        comment: z.string().max(200).optional(),
    });
}
