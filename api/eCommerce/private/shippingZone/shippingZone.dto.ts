import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";

export type ShippingZone = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    countries?: CountrySimple[];
    states?: StateSimple[];
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
