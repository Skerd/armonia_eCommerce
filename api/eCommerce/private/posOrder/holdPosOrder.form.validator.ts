import {z} from "zod";
import {greaterThanOrEqualZod, isObjectIdZod, stringMaxLengthZod, arrayMinItemsZod} from "../../../../../core/helpers/zodBuilder";

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
        customerName: stringMaxLengthZod(form?.["customerNameLabel"] ?? "customerName", 500, languageCode).optional(),
        note: stringMaxLengthZod(form?.["noteLabel"] ?? "note", 2000, languageCode).optional(),
        discountPercent: greaterThanOrEqualZod(form?.["discountPercentLabel"] ?? "discountPercent", 0, languageCode).optional(),
        lines: arrayMinItemsZod(form?.["linesLabel"] ?? "lines", 1, languageCode, z.object({
            productId: isObjectIdZod(form?.["productIdLabel"] ?? "productId", languageCode),
            variantId: isObjectIdZod(form?.["variantIdLabel"] ?? "variantId", languageCode).optional(),
            quantity: greaterThanOrEqualZod(form?.["quantityLabel"] ?? "quantity", 0.0001, languageCode),
            unitPrice: greaterThanOrEqualZod(form?.["unitPriceLabel"] ?? "unitPrice", 0, languageCode).optional(),
            discountPercent: greaterThanOrEqualZod(
                form?.["lineDiscountPercentLabel"] ?? "discountPercent",
                0,
                languageCode,
            ).optional(),
        })),
    });
}
