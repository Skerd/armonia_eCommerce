import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type ReturnRequest = DeletedData & OwnershipData & LifeCycleData & {
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
};
