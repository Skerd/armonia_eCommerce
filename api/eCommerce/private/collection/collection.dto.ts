import type {Media} from "../../../../../core/types";
import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type Collection = DeletedData &
    OwnershipData & {
    _id: string;
    type: "manual" | "dynamic";
    name: string;
    slug: string;
    description?: string;
    mainImage?: Media;
    isVisible?: boolean;
    position?: number;
    products?: {_id: string; title: string; slug: string}[];
    productCount?: number;
    ruleCondition?: "all" | "any";
    rules?: {field: string; operator: string; value: string}[];
    seoTitle?: string;
    seoDescription?: string;
    publishedAt?: string;
    company?: {_id: string; name: string};
};
