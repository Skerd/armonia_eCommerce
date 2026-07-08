import {SelectForm} from "../../../../../core/types/shared.types";

export type CategorySelectFormType = SelectForm & {
    parentId?: string;
    /** When set (e.g. edit form), omits this category from options to avoid self-reference. */
    excludeCategoryId?: string;
};
