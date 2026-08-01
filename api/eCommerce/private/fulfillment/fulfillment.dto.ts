import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Fulfillment = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    order: {_id: string; orderNumber?: string};
    items: {orderItemId: string; quantity: number}[];
    carrier?: string;
    trackingNumber?: string;
    trackingUrl?: string;
    shippedAt?: string;
    estimatedDeliveryAt?: string;
    deliveredAt?: string;
    status: string;
    notes?: string;
};
