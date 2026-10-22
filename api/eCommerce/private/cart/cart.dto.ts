import type {ShopCurrency} from "../../public/shopCatalog/shopCatalog.types";

export type CartItemSnapshot = {
    title: string;
    sku?: string;
    imageUrl?: string;
};

export type CartItemSeller = {
    _id: string;
    name: string;
    shopSlug?: string;
    shopHost?: string;
};

export type CartItem = {
    _id?: string;
    /** `slug` is filled on storefront cart responses, for linking the line to its product page. */
    product: {_id: string; title?: string; slug?: string};
    variant?: {_id: string} | null;
    /** Seller company for platform multi-seller carts. */
    seller?: CartItemSeller;
    sellerCompanyId?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    snapshot?: CartItemSnapshot;
    /** The product's order-quantity rules (storefront cart responses); the API rejects other quantities. */
    quantityRules?: {min: number; max?: number; step: number};
};

export type CartAppliedDiscount = {
    discount: string;
    code?: string;
    amount: number;
};

export type Cart = {
    _id: string;
    items: CartItem[];
    /** The cart's single currency (its first product's); absent when that product has none. */
    currency?: ShopCurrency;
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
