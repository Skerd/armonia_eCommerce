import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {OrderSimple} from "../../../../dto/order.dto";
import type {OrderMilestoneStatus} from "./orderMilestone.schema-def";

export type OrderMilestone = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: OrderSimple;
    name: string;
    amount: number;
    currency?: CurrencySimple;
    status: OrderMilestoneStatus;
    orderIndex: number;
};
