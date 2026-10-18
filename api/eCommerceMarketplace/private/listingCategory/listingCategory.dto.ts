import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";

export type ListingCategory = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    parentListingCategory?: {
        _id: string;
        name: string;
        slug: string;
    };
    order: number;
};
