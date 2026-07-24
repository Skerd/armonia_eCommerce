export type EscrowSummaryByCurrency = {
    currencyId: string;
    currencySymbol?: string;
    holds: number;
    releases: number;
    refunds: number;
    fees: number;
};

/** A completed hold with no matching release or refund — money sitting in escrow. */
export type EscrowStuckHold = {
    escrowTransactionId: string;
    orderId: string;
    amount: number;
    currencyId?: string;
    currencySymbol?: string;
    /** Gateway mirror: ledger_only | pending | succeeded | failed */
    gatewayStatus?: string;
    createdAt?: string;
    ageDays: number;
};

export type EscrowSummary = {
    byCurrency: EscrowSummaryByCurrency[];
    /** Oldest first; capped server-side. */
    stuckHolds: EscrowStuckHold[];
};
