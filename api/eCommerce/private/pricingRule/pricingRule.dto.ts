import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type PricingRuleRef = {_id: string; name: string; title?: string};

export type PricingRule = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    name: string;
    type: string;
    value: number;
    appliesTo: string;
    targetIds?: string[];
    /** Resolved targets for forms/chips. */
    targets?: PricingRuleRef[];
    /** Sheet reference cards when appliesTo === product. */
    productTargets?: PricingRuleRef[];
    /** Sheet reference cards when appliesTo === collection. */
    collectionTargets?: PricingRuleRef[];
    /** Sheet reference cards when appliesTo === category. */
    categoryTargets?: PricingRuleRef[];
    customerGroups?: string[];
    customerGroupRefs?: PricingRuleRef[];
    minimumOrderAmount?: number;
    minimumQuantity?: number;
    priority: number;
    isActive: boolean;
    startsAt?: string;
    endsAt?: string;
    company?: {_id: string; name: string};
};
