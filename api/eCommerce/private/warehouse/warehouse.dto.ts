import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type Warehouse = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    code: string;
    address?: {
        country?: {_id: string; name: string};
        state?: {_id: string; name: string};
        city?: {_id: string; name: string};
        street?: string;
        postalCode?: string;
    };
    isDefault?: boolean;
    isActive?: boolean;
    company?: {_id: string; name: string};
    createdAt?: string;
};
