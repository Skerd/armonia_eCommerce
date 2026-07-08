export type CreateOrderMilestoneFormType = {
    orderId: string;
    name: string;
    amount: number;
    currencyId: string;
    orderIndex?: number;
};
