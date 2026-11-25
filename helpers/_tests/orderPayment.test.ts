import {describe, expect, it} from "vitest";
import type {CheckoutPaymentMethod} from "../../api/eCommerce/private/checkout/checkout.dto";
import {formatIban, isCardPaymentMethod} from "../orderPayment";

describe("order payment helpers (D190)", () => {
    it("shows an IBAN in groups of four, whatever spacing and case it was stored or typed with", () => {
        expect(formatIban("AL47212110090000000235698741")).toBe("AL47 2121 1009 0000 0002 3569 8741");
        expect(formatIban("ch93 0076 2011 6238 5295 7")).toBe("CH93 0076 2011 6238 5295 7");
    });

    it("counts only processor payments as card payments", () => {
        const methods: (CheckoutPaymentMethod | undefined)[] = ["stripe", "paypal", "cod", "bank_transfer", undefined];
        expect(methods.map(isCardPaymentMethod)).toEqual([true, true, false, false, false]);
    });
});
