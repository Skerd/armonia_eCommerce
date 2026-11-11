import type {CurrencySimple} from "../../core/dto/currency.dto";
import type {SimpleUser} from "../../core/dto/user.dto";
import type {ListingSimple} from "./listing.dto";
import type {TaskRequestSimple} from "./taskRequest.dto";

/** The order a booking, delivery, milestone or revision belongs to, enough to name it (UX-01). */
export type OrderSimple = {
    _id: string;
    name: string;
    status: string;
    amount: number;
    listing?: ListingSimple;
    taskRequest?: TaskRequestSimple;
    customer?: SimpleUser;
};

export type OrderWithTaskOrListing = {
    _id: string;
    name: string;
    status: string;
    amount: number;
    currency: CurrencySimple;
    taskRequest?: TaskRequestSimple;
    listing?: ListingSimple;
};
