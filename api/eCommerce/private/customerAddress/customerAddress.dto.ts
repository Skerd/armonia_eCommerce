import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type CustomerAddress = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    customer?: {
        _id: string;
        name?: string;
        surname?: string
    };
    firstName: string;
    lastName: string;
    phone?: string;
    street: string;
    city?: {
        _id: string;
        name: string
    };
    state?: {
        _id: string;
        name: string
    };
    postalCode?: string;
    country?: {
        _id: string;
        name: string
    };
    latitude: number;
    longitude: number;
    isDefault: boolean;
    label?: string;
};
