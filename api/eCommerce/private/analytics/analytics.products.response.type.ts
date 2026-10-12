import type {AnalyticsCurrency} from "./analytics.revenue.response.type";

export type AnalyticsTopProduct = {
    _id: string;
    title?: string;
    totalSold: number;
    totalRevenue: number;
};

export type AnalyticsProductsResponse = {
    topProducts: AnalyticsTopProduct[];
    byStatus: Record<string, number>;
    /** The currency `topProducts` revenue is in. */
    currency: AnalyticsCurrency | null;
};
