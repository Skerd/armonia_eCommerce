import type {DeletedData, OwnershipData, LifeCycleData, TableResponse} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ListingSimple} from "../../../../dto/listing.dto";
import type {TaskRequestSimple} from "../../../../dto/taskRequest.dto";
import type {BidSimple} from "../../../../dto/bid.dto";
import type {OrderStatus} from "./order.schema-def";
import type {OrderDelivery} from "../orderDelivery/orderDelivery.dto";
import type {OrderMilestone} from "../orderMilestone/orderMilestone.dto";
import type {OrderRevision} from "../orderRevision/orderRevision.dto";
import type {Booking} from "../booking/booking.dto";

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
    note?: string;
    /** Sheet only (single route): the order's deliveries, newest first, when the caller may read them. */
    deliveries?: OrderDelivery[];
    /** Sheet only (single route): the order's milestones in release order. */
    milestones?: OrderMilestone[];
    /** Sheet only (single route): the customer's revision requests, newest first. */
    revisions?: OrderRevision[];
};

export type OrderListResponse = TableResponse<Order>;

/** Storefront account view of a marketplace order; the caller is its customer. */
export type BuyerServiceOrder = Order & {
    /** Media id of the listing's main image (listing orders only). */
    listingImage?: string;
    /** True once the customer has reviewed the completed order. */
    reviewed?: boolean;
    /** Single route only: the provider's scheduled sessions for the order. */
    bookings?: Booking[];
};
