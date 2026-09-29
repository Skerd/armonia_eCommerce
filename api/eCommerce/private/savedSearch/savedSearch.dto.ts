import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";

export type SavedSearchFilters = {
    title?: string;
    categoryId?: string;
    location?: string;
    tags?: string[];
    geoLat?: number;
    geoLng?: number;
    geoMaxKm?: number;
};

export type SavedSearch = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    user?: SimpleBlankUser;
    name: string;
    filters: SavedSearchFilters;
};
