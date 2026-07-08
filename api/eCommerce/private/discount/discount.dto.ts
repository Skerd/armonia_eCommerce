import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type Discount = DeletedData &
    OwnershipData & {
    _id: string;
    type: "percentage" | "fixed" | "free_shipping" | "buy_x_get_y";
    title: string;
    code?: string;
    value: number;
    appliesTo: "order" | "product" | "collection" | "category";
    targetIds?: string[];
    targetLabels?: {_id: string; name: string}[];
    minimumOrderAmount?: number;
    minimumQuantity?: number;
    usageLimit?: number;
    usageLimitPerCustomer?: number;
    usageCount: number;
    customerGroups?: string[];
    customerGroupLabels?: {_id: string; name: string}[];
    isActive: boolean;
    startsAt: string;
    endsAt?: string;
    buyXGetY?: {buyQuantity: number; getQuantity: number; getProductIds: string[]};
    company?: {_id: string; name: string};
    createdAt?: string;
};
