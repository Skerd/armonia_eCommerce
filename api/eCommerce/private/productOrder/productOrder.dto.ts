import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductVariantSimple} from "../../../../dto/productVariant.dto";
import type {DiscountSimple} from "../../../../dto/discount.dto";

export type ProductOrderItem = {
    _id: string;
    product: ProductSimple;
    variant?: ProductVariantSimple;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    snapshot: {
        title: string;
        sku?: string;
        imageUrl?: string
    };
    currency?: CurrencySimple;
};

export type ProductOrderAddress = {
    firstName: string;
    lastName: string;
    phone?: string;
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country?: CountrySimple;
};

export type ProductOrder = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    orderNumber: string;
    customer: SimpleBlankUser;
    email?: string;
    phone?: string;
    items?: ProductOrderItem[];
    subtotal: number;
    discountTotal: number;
    shippingTotal: number;
    taxTotal: number;
    grandTotal: number;
    currency: CurrencySimple;
    shippingAddress: ProductOrderAddress;
    billingAddress?: ProductOrderAddress;
    paymentStatus: "unpaid" | "authorized" | "paid" | "partially_refunded" | "refunded" | "voided";
    fulfillmentStatus: "unfulfilled" | "partially_fulfilled" | "fulfilled" | "returned";
    status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
    appliedDiscounts?: {
        discount: DiscountSimple;
        amount: number
    }[];
    taxBreakdown?: {
        name: string;
        rate: number;
        amount: number
    }[];
    shippingRate?: {
        name: string;
        carrier?: string;
        price: number
    };
    notes?: string;
    internalNotes?: string;
    timeline?: {
        event: string;
        timestamp: string;
        user?: SimpleBlankUser;
        note?: string;
    }[];
    stripePaymentIntentId?: string;
    idempotencyKey: string;
    giftCard?: {
        giftCard: {
            _id: string;
            code?: string
        };
        code?: string;
        amount: number
    };
    paymentTransactions?: {
        _id: string;
        sourceType?: string;
        sourceId?: string;
        gateway: string;
        type: string;
        status: string;
        amount: number;
        refundedAmount?: number;
        gatewayTransactionId?: string;
        currency?: CurrencySimple;
    }[];
};
