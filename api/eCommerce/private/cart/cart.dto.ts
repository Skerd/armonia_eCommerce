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
    /** Changes the server made while re-pricing (shown to the buyer once). */
    notices?: CartNotices;
};

export type CartNotices = {
    /** Titles of lines dropped because the product/variant is no longer sold. */
    removedItems?: string[];
    /** Reason code when the applied discount stopped qualifying and was removed. */
    discountRemoved?: string;
    /** Gift card no longer redeemable and was removed. */
    giftCardRemoved?: boolean;
};
