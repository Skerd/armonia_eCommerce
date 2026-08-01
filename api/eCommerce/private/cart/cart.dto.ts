export type CartItemSnapshot = {
    title: string;
    sku?: string;
    imageUrl?: string;
};

export type CartItem = {
    _id?: string;
    product: {_id: string; title?: string};
    variant?: {_id: string} | null;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    snapshot?: CartItemSnapshot;
};

export type CartAppliedDiscount = {
    discount: string;
    code?: string;
    amount: number;
};

export type Cart = {
    _id: string;
    items: CartItem[];
    subtotal: number;
    discountTotal: number;
    appliedDiscounts?: CartAppliedDiscount[];
    appliedGiftCard?: {code: string; amount: number};
    expiresAt?: string;
};
