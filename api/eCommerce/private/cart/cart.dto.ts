import type {Media} from "../../../../../core/types";

export type CartItem = {
    _id: string;
    product: {_id: string; title: string; slug: string; sku?: string};
    variant?: {_id: string; sku?: string; attributeCombination?: {attribute: {name: string}; value: string}[]};
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    snapshot: {title: string; sku?: string; image?: Media};
};

export type Cart = {
    _id: string;
    sessionId?: string;
    user?: {_id: string; name: string; surname: string};
    items: CartItem[];
    currency?: {_id: string; name: string; symbol: string; abbreviation: string};
    appliedDiscounts?: {discount: {_id: string; title: string; code?: string}; amount: number}[];
    subtotal: number;
    discountTotal: number;
    estimatedTotal: number;
    itemCount: number;
    expiresAt: string;
};
