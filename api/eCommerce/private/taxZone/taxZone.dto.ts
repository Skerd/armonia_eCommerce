import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";

export type TaxZone = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    country: CountrySimple;
    states?: StateSimple[];
    postalCodePatterns?: string[];
    rates: {
        name: string;
        rate: number;
        isCompound: boolean;
        appliesTo: string;
    }[];
    priority: number;
    isActive: boolean;
};
