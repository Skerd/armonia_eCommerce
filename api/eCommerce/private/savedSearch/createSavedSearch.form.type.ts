import {SavedSearchFilters} from "./savedSearch.form.response.type";

export type CreateSavedSearchFormType = {
    name: string;
    filters: SavedSearchFilters;
};
