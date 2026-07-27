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
    company?: {_id: string; name: string};
    createdBy?: {_id: string; name: string; surname: string};
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    deletedBy?: {_id: string; name: string; surname: string};
};
