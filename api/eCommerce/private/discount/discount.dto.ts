import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type DiscountRef = {_id: string; name: string; title?: string};

export type Discount = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    type: "percentage" | "fixed" | "free_shipping" | "buy_x_get_y";
    title: string;
    code?: string;
    value: number;
    appliesTo: "order" | "product" | "collection" | "category";
    targetIds?: string[];
    /** Resolved targets for forms/chips. */
    targets?: DiscountRef[];
    /** Sheet reference cards when appliesTo === product. */
    productTargets?: DiscountRef[];
    /** Sheet reference cards when appliesTo === collection. */
    collectionTargets?: DiscountRef[];
    /** Sheet reference cards when appliesTo === category. */
    categoryTargets?: DiscountRef[];
    minimumOrderAmount?: number;
    minimumQuantity?: number;
    usageLimit?: number;
    usageLimitPerCustomer?: number;
    usageCount: number;
    customerGroups?: string[];
    customerGroupRefs?: DiscountRef[];
    isActive: boolean;
    startsAt: string;
    endsAt?: string;
    buyXGetY?: {
        buyQuantity: number;
        getQuantity: number;
        getProductIds: string[];
        getProducts?: DiscountRef[];
    };
    company?: {_id: string; name: string};
};
