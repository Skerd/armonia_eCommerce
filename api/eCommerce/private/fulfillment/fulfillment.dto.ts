import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ProductOrderSimple} from "../../../../dto/productOrder.dto";

export type Fulfillment = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    order: ProductOrderSimple;
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
