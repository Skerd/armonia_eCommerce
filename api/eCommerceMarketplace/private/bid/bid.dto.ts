import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {TaskRequestSimple} from "../../../../dto/taskRequest.dto";

export type BidStatus = "pending" | "accepted" | "rejected";

export type Bid = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    taskRequest?: TaskRequestSimple;
    name: string;
    bidder?: SimpleUser;
    amount: number;
    currency?: CurrencySimple;
    proposal: string;
    deliveryDays: number;
    status: BidStatus;
};
