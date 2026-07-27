import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Warehouse = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    name: string;
    code: string;
    address?: {
        country?: {_id: string; name: string};
        state?: {_id: string; name: string};
        city?: {_id: string; name: string};
        street?: string;
        postalCode?: string;
        latitude?: number;
        longitude?: number;
    };
    isDefault?: boolean;
    isActive?: boolean;
    company?: {_id: string; name: string};
};
