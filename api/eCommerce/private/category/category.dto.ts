import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Category = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    parent?: {
        _id: string;
        name: string;
        slug: string;
    };
    order: number;
};
