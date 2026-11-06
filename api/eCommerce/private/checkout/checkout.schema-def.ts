import {CHECKOUT_PAYMENT_METHODS} from "./checkoutPayment.form.validator";

/** A delivery or billing address as the buyer enters it (`checkoutAddress.form.validator.ts`). */
const CheckoutAddressDef = {
    firstName: {type: "string", required: true},
    lastName: {type: "string", required: true},
    phone: {type: "string", required: false},
    street: {type: "string", required: true},
    city: {type: "string", required: true},
    state: {type: "string", required: false},
    postalCode: {type: "string", required: false},
    country: {type: "objectId", required: false},
} as const;

/**
 * The checkout fields the buyer sets: addresses and payment method. Lines, totals, rates, reservations, currency,
 * status and payment intent are copied from the cart or computed by the server (`validateSchemaDefAgainstMongoose`
 * lists the required ones as server-owned).
 */
export const CheckoutSchemaDef = {
    shippingAddress: {type: "embedded", required: false, items: CheckoutAddressDef},
    billingAddress: {type: "embedded", required: false, items: CheckoutAddressDef},
    paymentMethod: {type: "enum", required: false, options: CHECKOUT_PAYMENT_METHODS},
} as const;
