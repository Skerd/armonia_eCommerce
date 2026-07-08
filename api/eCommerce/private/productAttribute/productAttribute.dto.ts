import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type ProductAttribute = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    values?: string[];
    isVisibleOnProductPage?: boolean;
    isUsedForVariants?: boolean;
    position?: number;
    valueCount?: number;
    company?: {_id: string; name: string};
    createdAt?: string;
};
