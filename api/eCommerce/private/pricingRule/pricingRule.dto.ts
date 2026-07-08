import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type PricingRule = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    type: string;
    value: number;
    appliesTo: string;
    targetIds?: string[];
    targetLabels?: {_id: string; name: string}[];
    customerGroups?: string[];
    customerGroupLabels?: {_id: string; name: string}[];
    minimumOrderAmount?: number;
    minimumQuantity?: number;
    priority: number;
    isActive: boolean;
    startsAt?: string;
    endsAt?: string;
    company?: {_id: string; name: string};
    createdAt?: string;
};
