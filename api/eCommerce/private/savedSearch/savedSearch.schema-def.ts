import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

const SavedSearchFiltersDef = {
    title: {type: "string", required: false},
    categoryId: {type: "string", required: false},
    location: {type: "string", required: false},
    tags: {type: "stringArray", required: false},
    geoLat: {type: "number", required: false},
    geoLng: {type: "number", required: false},
    geoMaxKm: {type: "number", required: false},
} as const;

export const SavedSearchSchemaDef = {
    name: {type: "string", required: true, max: 100},
    filters: {type: "embedded", required: false, items: SavedSearchFiltersDef},
} as const;

export type CreateSavedSearchFormType = InferCreateForm<typeof SavedSearchSchemaDef>;
export type EditSavedSearchFormType = InferEditForm<typeof SavedSearchSchemaDef> & {_id: string};
