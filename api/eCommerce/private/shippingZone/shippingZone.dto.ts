import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type ShippingZone = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    countries?: {
        _id: string;
        name: string
    }[];
    states?: {
        _id: string;
        name: string
    }[];
    postalCodePatterns?: string[];
    rates: {
        name: string;
        type: string;
        price?: number;
        carrier?: string;
        estimatedDeliveryDays?: number;
        conditions?: {
            minWeight?: number;
            maxWeight?: number;
            minOrderAmount?: number;
            maxOrderAmount?: number;
        };
    }[];
    isActive: boolean;
};
