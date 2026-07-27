import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type ProductAttribute = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    name: string;
    values?: string[];
    isVisibleOnProductPage?: boolean;
    isUsedForVariants?: boolean;
    position?: number;
    valueCount?: number;
    company?: {_id: string; name: string};
};
