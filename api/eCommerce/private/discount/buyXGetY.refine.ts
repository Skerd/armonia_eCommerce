import {z} from "zod";
import {getValidationMessage} from "../../../../../core/helpers/zodBuilder";

type BuyXGetYShape = {
    type?: string;
    buyXGetY?: {
        buyQuantity?: number;
        getQuantity?: number;
        getProductIds?: unknown[];
    } | null;
};

/** Shared create/edit rule: BXGY requires buy/get qty >= 1 and at least one eligible product. */
export function refineBuyXGetY(languageCode: string, form: Record<string, unknown> | null = null) {

    return (data: BuyXGetYShape, ctx: z.RefinementCtx) => {
        if (data.type !== "buy_x_get_y") return;

        const bx = data.buyXGetY;
        if (!bx || typeof bx.buyQuantity !== "number" || bx.buyQuantity < 1 || Number.isNaN(bx.buyQuantity)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["buyXGetY", "buyQuantity"],
                message: getValidationMessage("number", "notEmpty", [String(form?.["buyQuantityLabel"] ?? "buyQuantity")], languageCode),
            });
        }
        if (!bx || typeof bx.getQuantity !== "number" || bx.getQuantity < 1 || Number.isNaN(bx.getQuantity)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["buyXGetY", "getQuantity"],
                message: getValidationMessage("number", "notEmpty", [String(form?.["getQuantityLabel"] ?? "getQuantity")], languageCode),
            });
        }
        if (!bx || !Array.isArray(bx.getProductIds) || bx.getProductIds.length < 1) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["buyXGetY", "getProductIds"],
                message: getValidationMessage("array", "notEmpty", [String(form?.["getProductIdsLabel"] ?? "getProductIds")], languageCode),
            });
        }
    };
}
