import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";
import type {CitySimple} from "../../../../../core/dto/city.dto";

export type Warehouse = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    name: string;
    code: string;
    address?: {
        country?: CountrySimple;
        state?: StateSimple;
        city?: CitySimple;
        street?: string;
        postalCode?: string;
        latitude?: number;
        longitude?: number;
    };
    isDefault?: boolean;
    isActive?: boolean;
};
