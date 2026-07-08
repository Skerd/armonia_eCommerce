import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type ProductOrderItem = {
    _id: string;
    product: {_id: string; title: string; slug: string; sku?: string};
    variant?: {_id: string; sku?: string; attributeCombination?: {attribute: {name: string}; value: string}[]};
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    snapshot: {title: string; sku?: string; imageUrl?: string};
};

export type ProductOrderAddress = {
    firstName: string;
    lastName: string;
    phone?: string;
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country: {_id: string; name: string; code: string};
};

export type ProductOrder = DeletedData &
    OwnershipData & {
    _id: string;
    orderNumber: string;
    customer: {_id: string; name: string; surname: string};
    company: {_id: string; name: string};
    items: ProductOrderItem[];
    subtotal: number;
    discountTotal: number;
    shippingTotal: number;
    taxTotal: number;
    grandTotal: number;
    currency: {_id: string; name: string; symbol: string; abbreviation: string};
    shippingAddress: ProductOrderAddress;
    billingAddress?: ProductOrderAddress;
    paymentStatus: "unpaid" | "authorized" | "paid" | "partially_refunded" | "refunded" | "voided";
    fulfillmentStatus: "unfulfilled" | "partially_fulfilled" | "fulfilled" | "returned";
    status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
    appliedDiscounts?: {discount: {_id: string; title: string; code?: string}; amount: number}[];
    taxBreakdown?: {name: string; rate: number; amount: number}[];
    shippingRate?: {name: string; carrier?: string; price: number};
    notes?: string;
    internalNotes?: string;
    timeline?: {event: string; timestamp: string; userId?: string}[];
    stripePaymentIntentId?: string;
    idempotencyKey: string;
    createdAt?: string;
    updatedAt?: string;
};
