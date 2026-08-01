import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

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
    user?: {_id: string; name?: string; surname?: string};
    name: string;
    filters: SavedSearchFilters;
};
