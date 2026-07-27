import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type CmsBlock = DeletedData &
    OwnershipData & {
    _id: string;
    type: string;
    title: string;
    isActive: boolean;
    position: number;
    config: Record<string, unknown>;
    /** Pretty-printed JSON for sheet display (not persisted). */
    configText?: string;
    startsAt?: string;
    endsAt?: string;
    visibility?: {devices?: string[]; regions?: string[]};
    abTestVariant?: string;
    company?: {_id: string; name: string};
    createdAt?: string;
};
