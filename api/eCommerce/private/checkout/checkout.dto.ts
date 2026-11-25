import type {PortalCurrency} from "../../../../../core/api/portal/public/portal/portal.dto";

export type CheckoutStatus = "pending" | "payment_processing" | "confirmed" | "failed" | "expired";
export type CheckoutPaymentMethod = "stripe" | "paypal" | "cod" | "bank_transfer";

export type CheckoutItem = {
    product: string;
    variant?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    snapshot?: {title?: string; sku?: string; imageUrl?: string};
};

export type CheckoutAddress = {
    firstName: string;
    lastName: string;
    phone?: string;
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country?: string;
};

export type CheckoutShippingRate = {
    name: string;
    carrier?: string;
    price: number;
    estimatedDeliveryDays?: number;
};

export type Checkout = {
    _id: string;
    status: CheckoutStatus;
    items: CheckoutItem[];
    shippingAddress?: CheckoutAddress;
    billingAddress?: CheckoutAddress;
    availableShippingRates: CheckoutShippingRate[];
    selectedShippingRate?: CheckoutShippingRate;
    subtotal: number;
    discountTotal: number;
    shippingTotal: number;
    taxTotal: number;
    grandTotal: number;
    currency?: PortalCurrency;
    giftCard?: {code: string; amount: number};
    /**
     * The ways this checkout can be paid (D190), on the buyer's checkout routes: a card only while the platform takes
     * cards, cash on delivery, and a bank transfer only when every seller on it has a bank account to pay into.
     */
    paymentMethods?: CheckoutPaymentMethod[];
    paymentMethod?: CheckoutPaymentMethod;
    stripeClientSecret?: string;
    expiresAt?: string;
};
