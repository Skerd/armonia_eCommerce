import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type Category = OwnershipData & DeletedData & {
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
