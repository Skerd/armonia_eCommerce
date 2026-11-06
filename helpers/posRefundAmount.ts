import {DEFAULT_DECIMAL_PLACES, prorateMoney, subtractMoney, sumMoney, type MoneyInput} from "../../core/helpers/money";

/**
 * What the till refunds for quantities picked from a sale (D35, GLB-08). One implementation for the server, which
 * books the refund (maestro `refundPosOrder`), and the panel's refund dialog, which shows the amount before the
 * cashier confirms, so the two can never differ by a cent.
 *
 * Each picked line refunds its total prorated to the quantity; the order discount comes off in proportion to the
 * picked lines' share of all line totals. Every step rounds once at the currency's `decimalPlaces`.
 */

/** A sold line: its total after line discounts and the quantity sold. */
export type PosSoldLine = {priceTotal?: MoneyInput; quantity: number};

export type PosRefundPick<L extends PosSoldLine = PosSoldLine> = {line: L; quantity: number};

/** The share of a sold line's total that `quantity` of it refunds; 0 for a line sold with no quantity. */
export function posLineRefundTotal(line: PosSoldLine, quantity: number, decimals: number = DEFAULT_DECIMAL_PLACES): number {
    return line.quantity > 0 ? prorateMoney(line.priceTotal ?? 0, quantity, line.quantity, decimals) : 0;
}

/**
 * The amount refunded for `picks` of an order with these `lines` and order `discountTotal`: the picked lines'
 * prorated totals, less the order discount's share of them, never below zero.
 */
export function posRefundAmount(
    order: {lines: readonly PosSoldLine[]; discountTotal?: MoneyInput},
    picks: readonly PosRefundPick[],
    decimals: number = DEFAULT_DECIMAL_PLACES,
): number {
    const amount = sumMoney(picks.map(({line, quantity}) => posLineRefundTotal(line, quantity, decimals)), decimals);
    const lineSum = sumMoney(order.lines.map((line) => line.priceTotal ?? 0), decimals);
    const discountTotal = Number(order.discountTotal ?? 0);
    if (!(discountTotal > 0) || !(lineSum > 0)) return amount;
    const discountShare = prorateMoney(order.discountTotal, amount, lineSum, decimals);
    return Math.max(0, subtractMoney(amount, discountShare, decimals));
}
