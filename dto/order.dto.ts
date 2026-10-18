import type {CurrencySimple} from "../../core/dto/currency.dto";
import type {ListingSimple} from "./listing.dto";
import type {TaskRequestSimple} from "./taskRequest.dto";

export type OrderSimple = {
    _id: string;
    status: string;
    amount: number;
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
