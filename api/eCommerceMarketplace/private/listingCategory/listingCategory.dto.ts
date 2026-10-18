import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {ListingCategorySimple} from "../../../../dto/listingCategory.dto";

export type ListingCategory = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    parentListingCategory?: ListingCategorySimple;
    order: number;
};
