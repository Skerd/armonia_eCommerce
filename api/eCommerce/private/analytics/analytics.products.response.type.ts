export type AnalyticsTopProduct = {
    _id: string;
    title?: string;
    totalSold: number;
    totalRevenue: number;
};

export type AnalyticsProductsResponse = {
    topProducts: AnalyticsTopProduct[];
    byStatus: Record<string, number>;
};
