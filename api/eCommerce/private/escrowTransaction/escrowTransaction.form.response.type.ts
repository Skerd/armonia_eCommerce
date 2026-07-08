export type EscrowTransaction = {
    _id: string;
    order?: { _id: string; status?: string };
    amount: number;
    currency?: { _id: string; symbol?: string; abbreviation?: string };
    type: "hold" | "release" | "refund" | "fee";
    status: "pending" | "completed" | "failed";
    recipient?: "customer" | "provider" | "platform";
    createdAt?: Date;
};

export type EscrowTransactionFormResponseType = {
    data: EscrowTransaction[];
    total: number;
};
