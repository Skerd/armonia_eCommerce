import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";

export type ShippingZone = DeletedData & OwnershipData & LifeCycleData & {
    /** The shop currency its amounts are in, added by the route (UX-07). */
    currency?: CurrencySimple;
    _id: string;
    name: string;
    countries?: CountrySimple[];
    states?: StateSimple[];
    postalCodePatterns?: string[];
    rates: {
        name: string;
        type: string;
        price?: number;
        /** The shop currency, copied onto each rate so the rate list shows "€5" (UX-07). */
        currency?: CurrencySimple;
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
