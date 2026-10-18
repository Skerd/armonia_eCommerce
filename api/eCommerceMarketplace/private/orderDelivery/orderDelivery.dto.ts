import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {OrderDeliveryStatus} from "./orderDelivery.schema-def";

export type OrderDelivery = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    orderId: string;
    message?: string;
    attachments: {_id: string; url?: string; originalName?: string}[];
    status: OrderDeliveryStatus;
};
