export type OrderMilestone = {
    _id: string;
    orderId: string;
    name: string;
    amount: number;
    currencyId: string;
    currencySymbol?: string;
    status: "pending" | "released" | "delivered";
    orderIndex: number;
};

export type OrderMilestoneFormResponseType = {
    data: OrderMilestone[];
    total: number;
};
