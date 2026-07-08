export type PaymentTransaction = {
    _id: string;
    order: {_id: string; orderNumber?: string};
    gateway: string;
    type: string;
    status: string;
    amount: number;
    currency?: {_id: string; code?: string};
    gatewayTransactionId?: string;
    failureReason?: string;
    refundedAmount: number;
    company?: {_id: string; name: string};
    createdAt?: string;
};
