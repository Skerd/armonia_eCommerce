import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CollectionSimple} from "../../../../dto/collection.dto";
import type {CategorySimple} from "../../../../dto/category.dto";

export type CmsBlockSlide = {
    headline?: string;
    subheadline?: string;
    imageUrl?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

export type CmsBlockGridItem = {
    title?: string;
    imageUrl?: string;
    href?: string;
};

export type CmsBlockConfig = {
    headline?: string;
    subheadline?: string;
    imageUrl?: string;
    ctaLabel?: string;
    ctaHref?: string;
    message?: string;
    linkHref?: string;
    html?: string;
    url?: string;
    collectionId?: CollectionSimple;
    categoryIds?: CategorySimple[];
    limit?: number;
    slides?: CmsBlockSlide[];
    items?: CmsBlockGridItem[];
};

export type CmsBlock = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    type: string;
    title: string;
    isActive: boolean;
    position: number;
    config: CmsBlockConfig;
    startsAt?: string;
    endsAt?: string;
    visibility?: {devices?: string[]; regions?: string[]};
};
