import type {RequestStatus} from "../../../../../core/types/shared.types";

export type CategoryTreeFormType = {
    /** Whose children to list; the top level when left out. */
    parent?: string;
    /** Finds categories by name in any language, with their path; overrides `parent`. */
    search?: string;
};

/** A category in the hierarchy view (D195): named in the reader's language. */
export type CategoryTreeNode = {
    _id: string;
    name: string;
    slug: string;
    /** How many categories sit directly under it. */
    childCount: number;
    requestStatus?: RequestStatus;
    /** Search results only: the names above it, top level first. */
    path?: string[];
};

export type CategoryTreeResponse = {data: CategoryTreeNode[]; truncated: boolean};
