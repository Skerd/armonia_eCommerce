import type {Media} from "../../../../../core/types";
import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";
import type {CitySimple} from "../../../../../core/dto/city.dto";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ListingCategorySimple} from "../../../../dto/listingCategory.dto";

export type TaskRequest = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    requester?: SimpleUser;
    name: string;
    title: string;
    description: string;
    category?: ListingCategorySimple;
    budgetMin?: number;
    budgetMax?: number;
    currency?: CurrencySimple;
    address?: {
        street?: string;
        postalCode?: string;
        country?: CountrySimple;
        state?: StateSimple;
        city?: CitySimple;
        latitude?: number;
        longitude?: number;
    };
    expiresAt?: string;
    status: "open" | "closed" | "awarded";
    mainImage?: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    bidCount?: number;
};
