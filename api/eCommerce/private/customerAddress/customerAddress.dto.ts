import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";
import type {CitySimple} from "../../../../../core/dto/city.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";

export type CustomerAddress = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    customer?: SimpleBlankUser;
    firstName: string;
    lastName: string;
    phone?: string;
    street: string;
    city?: CitySimple;
    state?: StateSimple;
    postalCode?: string;
    country?: CountrySimple;
    latitude: number;
    longitude: number;
    isDefault: boolean;
    label?: string;
};
