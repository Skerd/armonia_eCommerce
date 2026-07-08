export type OrderRevision = {
    _id: string;
    orderId: string;
    deliveryId: string;
    requestedById: string;
    reason: string;
    status: "pending" | "completed";
    createdAt?: string;
};

export type OrderRevisionFormResponseType = {
    data: OrderRevision[];
    total: number;
};
