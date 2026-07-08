export type ReturnRequest = {
    _id: string;
    order: {_id: string; orderNumber: string};
    type: string;
    status: string;
    items: {orderItemId: string; quantity: number; reason: string}[];
    refundAmount?: number;
    customerNote?: string;
    adminNote?: string;
    resolvedBy?: {_id: string; name: string};
    resolvedAt?: string;
    createdAt?: string;
    deletedAt?: string;
};
