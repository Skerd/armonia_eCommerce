import {z} from "zod";
import {
    inBetweenRangeZod,
    isArrayOfObjectIdsZod,
    isObjectIdZod,
    stringMinMaxLengthZod,
} from "../../../../../core/helpers/zodBuilder";
import {DISCOUNT_CODE_MAX} from "./discount.schema-def";

/** Staff preview of a code against a priced cart snapshot (not checkout apply). */
export type ValidateDiscountItemFormType = {
    productId: string;
    variantId?: string;
    quantity: number;
    unitPrice: number;
    categoryIds?: string[];
    collectionIds?: string[];
};

export type ValidateDiscountFormType = {
    code: string;
    subtotal?: number;
    items?: ValidateDiscountItemFormType[];
};

export function validateDiscountFormSchema(languageCode: string, form: any = null) {
    const itemSchema = z.object({
        productId: isObjectIdZod(form?.["productIdLabel"] ?? "productId", languageCode),
        variantId: isObjectIdZod(form?.["variantIdLabel"] ?? "variantId", languageCode).optional(),
        quantity: inBetweenRangeZod(form?.["quantityLabel"] ?? "quantity", 1, 10000, languageCode),
        unitPrice: inBetweenRangeZod(form?.["unitPriceLabel"] ?? "unitPrice", 0, Number.MAX_SAFE_INTEGER, languageCode),
        categoryIds: isArrayOfObjectIdsZod(form?.["categoryIdsLabel"] ?? "categoryIds", languageCode).optional(),
        collectionIds: isArrayOfObjectIdsZod(form?.["collectionIdsLabel"] ?? "collectionIds", languageCode).optional(),
    });

    return z.object({
        code: stringMinMaxLengthZod(form?.["codeLabel"] ?? "code", 1, DISCOUNT_CODE_MAX, languageCode),
        subtotal: inBetweenRangeZod(form?.["subtotalLabel"] ?? "subtotal", 0, Number.MAX_SAFE_INTEGER, languageCode).optional(),
        items: z.array(itemSchema).max(200).optional(),
    });
}
