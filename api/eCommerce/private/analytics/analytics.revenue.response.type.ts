export type AnalyticsRevenueDaily = {
    _id: string;
    revenue: number;
    orders: number;
};

export type AnalyticsRevenueResponse = {
    totalRevenue: number;
    orderCount: number;
    averageOrderValue: number;
    totalTax: number;
    totalShipping: number;
    daily: AnalyticsRevenueDaily[];
    /** The currency every figure above is in (never summed across currencies). */
    currency: AnalyticsCurrency | null;
    /** Currencies with paid orders in the period, most orders first; pass `?currency=<_id>` to switch. */
    currencies: AnalyticsCurrency[];
};

export type AnalyticsCurrency = {
    _id: string;
    abbreviation?: string;
    orderCount: number;
};
