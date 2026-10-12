import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/**
 * Catalog orders are written by checkout, not by a panel form.
 * The def exists so the Mongoose schema cannot drift from the wire contract.
 */
export const productOrderStatuses = ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "refunded"] as const;
export const productOrderPaymentStatuses = ["unpaid", "authorized", "paid", "partially_refunded", "refunded", "voided"] as const;
export const productOrderFulfillmentStatuses = ["unfulfilled", "partially_fulfilled", "fulfilled", "returned"] as const;

export type ProductOrderStatus = (typeof productOrderStatuses)[number];
export type ProductOrderPaymentStatus = (typeof productOrderPaymentStatuses)[number];
export type ProductOrderFulfillmentStatus = (typeof productOrderFulfillmentStatuses)[number];

const ProductOrderAddressDef = {
    firstName: {type: "string", required: false},
    lastName: {type: "string", required: false},
    phone: {type: "string", required: false},
    street: {type: "string", required: false},
    city: {type: "string", required: false},
    state: {type: "string", required: false},
    postalCode: {type: "string", required: false},
    country: {type: "objectId", required: false},
} as const;

const ProductOrderItemDef = {
    product: {type: "objectId", required: true},
    variant: {type: "objectId", required: false},
    // POS sells weighed goods: fractional quantities match the POS line validator
    quantity: {type: "number", required: true, min: 0.0001},
    unitPrice: {type: "number", required: true, min: 0},
    totalPrice: {type: "number", required: true, min: 0},
    snapshot: {
        type: "embedded",
        required: false,
        items: {
            title: {type: "string", required: false},
            sku: {type: "string", required: false},
            imageUrl: {type: "string", required: false},
            variantLabel: {type: "string", required: false},
            productType: {type: "string", required: false},
        },
    },
} as const;

export const ProductOrderSchemaDef = {
    orderNumber: {type: "string", required: true},
    customer: {type: "objectId", required: true},
    email: {type: "string", required: false},
    phone: {type: "string", required: false},
    items: {type: "embeddedArray", required: false, items: ProductOrderItemDef},
    subtotal: {type: "number", required: false, min: 0},
    discountTotal: {type: "number", required: false, min: 0},
    shippingTotal: {type: "number", required: false, min: 0},
    taxTotal: {type: "number", required: false, min: 0},
    grandTotal: {type: "number", required: false, min: 0},
    currency: {type: "objectId", required: true},
    /** ISO code of `currency` when the order was placed. */
    currencyCode: {type: "string", required: false},
    shippingAddress: {type: "embedded", required: true, items: ProductOrderAddressDef},
    billingAddress: {type: "embedded", required: false, items: ProductOrderAddressDef},
    paymentStatus: {type: "enum", required: false, options: productOrderPaymentStatuses},
    fulfillmentStatus: {type: "enum", required: false, options: productOrderFulfillmentStatuses},
    status: {type: "enum", required: false, options: productOrderStatuses},
    appliedDiscounts: {
        type: "embeddedArray",
        required: false,
        items: {
            discount: {type: "objectId", required: false},
            code: {type: "string", required: false},
            amount: {type: "number", required: false, min: 0},
        },
    },
    taxBreakdown: {
        type: "embeddedArray",
        required: false,
        items: {
            name: {type: "string", required: false},
            rate: {type: "number", required: false},
            amount: {type: "number", required: false},
        },
    },
    shippingRate: {
        type: "embedded",
        required: false,
        items: {
            name: {type: "string", required: false},
            carrier: {type: "string", required: false},
            price: {type: "number", required: false},
        },
    },
    notes: {type: "string", required: false},
    internalNotes: {type: "string", required: false},
    timeline: {
        type: "embeddedArray",
        required: false,
        items: {
            event: {type: "string", required: true},
            timestamp: {type: "date", required: false},
            userId: {type: "objectId", required: false},
            note: {type: "string", required: false},
        },
    },
    stripePaymentIntentId: {type: "string", required: false},
    idempotencyKey: {type: "string", required: true},
    giftCard: {
        type: "embedded",
        required: false,
        items: {
            giftCard: {type: "objectId", required: false},
            code: {type: "string", required: false},
            amount: {type: "number", required: false, min: 0},
        },
    },
} as const;

export type CreateProductOrderFormType = InferCreateForm<typeof ProductOrderSchemaDef>;
export type EditProductOrderFormType = InferEditForm<typeof ProductOrderSchemaDef>;
