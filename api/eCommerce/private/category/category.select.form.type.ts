import {SelectForm} from "../../../../../core/types/shared.types";

export type CategorySelectFormType = SelectForm & {
    /** When set (e.g. edit form), omits this category from options to avoid self-reference. */
    excludeCategoryId?: string;
    /** Only top-level categories: the branches a shop picks under What we sell (P26.8). */
    topLevel?: boolean;
    /** Only the branches the shop sells in (What we sell), when it picked any; every category otherwise (P26.8). */
    inShopBranches?: boolean;
};
