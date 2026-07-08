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
};
