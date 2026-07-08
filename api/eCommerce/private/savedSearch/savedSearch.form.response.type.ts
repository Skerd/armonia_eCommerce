export type SavedSearchFilters = {
    title?: string;
    categoryId?: string;
    location?: string;
    tags?: string[];
    geoLat?: number;
    geoLng?: number;
    geoMaxKm?: number;
};

export type SavedSearch = {
    _id: string;
    name: string;
    filters: SavedSearchFilters;
};

export type SavedSearchFormResponseType = {
    data: SavedSearch[];
    total: number;
};
