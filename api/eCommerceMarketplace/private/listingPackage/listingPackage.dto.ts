import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ListingSimple} from "../../../../dto/listing.dto";

export type ListingPackage = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    listing?: ListingSimple;
    provider?: SimpleUser;
    name: string;
    description?: string;
    price: {
        amount: number;
        currency?: CurrencySimple;
    };
    deliveryDays: number;
    order: number;
};
