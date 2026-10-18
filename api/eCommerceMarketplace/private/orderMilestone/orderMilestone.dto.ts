import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {OrderMilestoneStatus} from "./orderMilestone.schema-def";

export type OrderMilestone = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    orderId: string;
    name: string;
    amount: number;
    currencyId: string;
    currencySymbol?: string;
    status: OrderMilestoneStatus;
    orderIndex: number;
};
