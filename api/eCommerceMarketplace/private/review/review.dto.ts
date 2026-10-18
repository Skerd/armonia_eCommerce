import type {DeletedData, OwnershipData, LifeCycleData, TableResponse} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ListingSimple} from "../../../../dto/listing.dto";
import type {OrderWithTaskOrListing} from "../../../../dto/order.dto";

export type Review = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: OrderWithTaskOrListing;
    listing?: ListingSimple;
    rating: number;
    comment?: string;
    reviewer?: SimpleUser;
};

export type ReviewListResponse = TableResponse<Review>;

export type ListingReviewsSummary = {
    averageRating: number;
    reviewCount: number;
};
