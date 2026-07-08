export type EscrowSummaryByCurrency = {
    currencyId: string;
    currencySymbol?: string;
    holds: number;
    releases: number;
    refunds: number;
    fees: number;
};

export type EscrowSummary = {
    byCurrency: EscrowSummaryByCurrency[];
};
