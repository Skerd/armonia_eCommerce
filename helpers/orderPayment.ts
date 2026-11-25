import type {CheckoutPaymentMethod} from "../api/eCommerce/private/checkout/checkout.dto";

/**
 * Whether an order was paid through a card processor rather than offline. While the platform takes no cards (D190)
 * such a payment cannot be refunded through the processor, so the API refuses it and the panel does not offer it.
 */
export function isCardPaymentMethod(method: CheckoutPaymentMethod | undefined): boolean {
    return method === "stripe" || method === "paypal";
}

/** An IBAN as people read and type it: in groups of four ("AL47 2121 1009 …"). */
export function formatIban(iban: string): string {
    return iban.replace(/\s+/g, "").toUpperCase().replace(/(.{4})(?=.)/g, "$1 ");
}
