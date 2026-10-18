import type {DeletedData, OwnershipData, LifeCycleData, TableResponse} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ListingSimple} from "../../../../dto/listing.dto";
import type {TaskRequestSimple} from "../../../../dto/taskRequest.dto";
import type {BidSimple} from "../../../../dto/bid.dto";
import type {OrderStatus} from "./order.schema-def";

export type Order = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name: string;
    listing?: ListingSimple;
    taskRequest?: TaskRequestSimple;
    bid?: BidSimple;
    customer?: SimpleUser;
    provider?: SimpleUser;
    amount?: number;
    currency?: CurrencySimple;
    status?: OrderStatus;
    deliveryDueDate?: Date | string;
    /** True when the provider has submitted a delivery awaiting customer acceptance. */
    deliverySubmitted?: boolean;
    /** True when an open dispute exists on this order (blocks delivery acceptance etc.). */
    hasActiveDispute?: boolean;
};

export type OrderListResponse = TableResponse<Order>;
