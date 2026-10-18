import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {OrderRevisionStatus} from "./orderRevision.schema-def";

export type OrderRevision = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    orderId: string;
    deliveryId: string;
    requestedById: string;
    reason: string;
    status: OrderRevisionStatus;
};
