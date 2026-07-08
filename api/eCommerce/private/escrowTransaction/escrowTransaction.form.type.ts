import { TableForm } from "../../../../../core/types/shared.types";

export type EscrowTransactionFormType = TableForm & {
    orderId?: string;
    type?: "hold" | "release" | "refund" | "fee";
};
