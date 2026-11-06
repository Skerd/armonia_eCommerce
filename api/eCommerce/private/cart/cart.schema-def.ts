/** A cart line: the buyer picks product, variant and quantity; repricing sets the prices and the snapshot. */
const CartItemDef = {
    product: {type: "objectId", required: true},
    variant: {type: "objectId", required: false},
    sellerCompany: {type: "objectId", required: false},
    quantity: {type: "number", required: true, min: 1},
    unitPrice: {type: "number", required: true, min: 0},
    totalPrice: {type: "number", required: true, min: 0},
} as const;

/**
 * The cart fields the buyer sets: its lines. Totals, discounts, store credit, currency and expiry are computed by
 * repricing (`validateSchemaDefAgainstMongoose` lists the required ones as server-owned).
 */
export const CartSchemaDef = {
    items: {type: "embeddedArray", required: false, items: CartItemDef},
} as const;
