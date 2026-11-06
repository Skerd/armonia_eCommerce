import {describe, expect, it} from "vitest";
import {posLineRefundTotal, posRefundAmount} from "../posRefundAmount";

describe("POS refund amount (GLB-08)", () => {
    const lines = [
        {priceTotal: 30, quantity: 3},
        {priceTotal: 20, quantity: 2},
    ];

    it("prorates a line's total by the quantity refunded", () => {
        expect(posLineRefundTotal({priceTotal: 10, quantity: 3}, 1)).toBe(3.33);
        expect(posLineRefundTotal({priceTotal: 10, quantity: 0}, 1)).toBe(0);
    });

    it("sums the picked lines when the order has no discount", () => {
        expect(posRefundAmount({lines}, [{line: lines[0], quantity: 1}, {line: lines[1], quantity: 2}])).toBe(30);
    });

    it("takes off the order discount's share of the picked lines", () => {
        // 10 of 50 line total refunded, order discount 5 → share 1
        expect(posRefundAmount({lines, discountTotal: 5}, [{line: lines[0], quantity: 1}])).toBe(9);
        // Everything refunded gives back the order total exactly
        expect(posRefundAmount({lines, discountTotal: 5}, [{line: lines[0], quantity: 3}, {line: lines[1], quantity: 2}])).toBe(45);
    });

    it("rounds at the currency's decimal places", () => {
        const yen = [{priceTotal: 1000, quantity: 3}];
        expect(posRefundAmount({lines: yen}, [{line: yen[0], quantity: 1}], 0)).toBe(333);
        const dinar = [{priceTotal: 10, quantity: 3}];
        expect(posRefundAmount({lines: dinar, discountTotal: 1}, [{line: dinar[0], quantity: 1}], 3)).toBe(3);
    });
});
