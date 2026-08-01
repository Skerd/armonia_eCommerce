import type {Media} from "../../../../../core/types";
import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Collection = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    type: "manual" | "dynamic";
    name: string;
    slug: string;
    description?: string;
    mainImage?: Media;
    isVisible?: boolean;
    position?: number;
    products?: {
        _id: string;
        title: string;
        slug: string;
        sku?: string
    }[];
    productCount?: number;
    ruleCondition?: "all" | "any";
    rules?: {
        field: string;
        operator: string;
        value: string
    }[];
    seoTitle?: string;
    seoDescription?: string;
    publishedAt?: string;
};
