import {z} from "zod";
import {
    getValidationMessage,
    inBetweenRangeZod,
    isObjectIdZod,
    stringMinMaxLengthZod,
} from "../../../../../core/helpers/zodBuilder";

/** Upper bound per cart line — stops absurd quantities before stock checks run. */
export const MAX_CART_LINE_QUANTITY = 10000;

/** Whole-unit quantity in [min, MAX_CART_LINE_QUANTITY]. */
function cartQuantityZod(name: string, min: number, languageCode: string) {
    return inBetweenRangeZod(name, min, MAX_CART_LINE_QUANTITY, languageCode).refine(
        (value: number) => Number.isInteger(value),
        {message: getValidationMessage("number", "notNumber", [name], languageCode)},
    );
}

export type AddCartItemFormType = {
    productId: string;
    variantId?: string;
    quantity: number;
};

export function addCartItemFormSchema(languageCode: string, form: any = null) {
    return z.object({
        productId: isObjectIdZod(form?.["productIdLabel"] ?? "productId", languageCode),
        variantId: isObjectIdZod(form?.["variantIdLabel"] ?? "variantId", languageCode).optional(),
        quantity: cartQuantityZod(form?.["quantityLabel"] ?? "quantity", 1, languageCode),
    });
}

export type UpdateCartItemFormType = {
    itemId: string;
    /** 0 removes the line. */
    quantity: number;
};

export function updateCartItemFormSchema(languageCode: string, form: any = null) {
    return z.object({
        itemId: isObjectIdZod(form?.["itemIdLabel"] ?? "itemId", languageCode),
        quantity: cartQuantityZod(form?.["quantityLabel"] ?? "quantity", 0, languageCode),
    });
}

export type ApplyCartCodeFormType = {code: string};

export function applyCartCodeFormSchema(languageCode: string, form: any = null) {
    return z.object({
        code: stringMinMaxLengthZod(form?.["codeLabel"] ?? "code", 1, 64, languageCode),
    });
}
