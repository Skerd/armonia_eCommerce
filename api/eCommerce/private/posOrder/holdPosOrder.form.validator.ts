import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type HoldPosOrderFormType = {
    sessionId: string;
    /** Update an existing draft hold. */
    _id?: string;
    customerId?: string;
    customerName?: string;
    note?: string;
    discountPercent?: number;
    lines: {
        productId: string;
        variantId?: string;
        quantity: number;
        unitPrice?: number;
        discountPercent?: number;
    }[];
};

export function holdPosOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        sessionId: isObjectIdZod(form?.["sessionIdLabel"] ?? "sessionId", languageCode),
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode).optional(),
        customerId: isObjectIdZod(form?.["customerIdLabel"] ?? "customerId", languageCode).optional(),
        customerName: z.string().max(500).optional(),
        note: z.string().max(2000).optional(),
        discountPercent: greaterThanOrEqualZod(form?.["discountPercentLabel"] ?? "discountPercent", 0, languageCode).optional(),
        lines: z
            .array(
                z.object({
                    productId: isObjectIdZod(form?.["productIdLabel"] ?? "productId", languageCode),
                    variantId: isObjectIdZod(form?.["variantIdLabel"] ?? "variantId", languageCode).optional(),
                    quantity: greaterThanOrEqualZod(form?.["quantityLabel"] ?? "quantity", 0.0001, languageCode),
                    unitPrice: greaterThanOrEqualZod(form?.["unitPriceLabel"] ?? "unitPrice", 0, languageCode).optional(),
                    discountPercent: greaterThanOrEqualZod(
                        form?.["lineDiscountPercentLabel"] ?? "discountPercent",
                        0,
                        languageCode,
                    ).optional(),
                }),
            )
            .min(1),
    });
}
