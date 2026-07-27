import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type ProductReview = DeletedData &
    OwnershipData & {
    _id: string;
    order?: {_id: string; orderNumber?: string; status?: string; paymentStatus?: string};
    product?: {_id: string; title?: string; slug?: string; sku?: string};
    rating: number;
    title?: string;
    comment?: string;
    /** Sheet/card title: review title, product title, or id. */
    displayTitle?: string;
    reviewer?: {_id: string; name?: string; surname?: string; photo?: string};
    company?: {_id: string; name: string};
    createdAt?: string;
    updatedAt?: string;
};

/** Public storefront shape — reviewer reduced to a display name. */
export type ShopProductReview = {
    _id: string;
    rating: number;
    title?: string;
    comment?: string;
    reviewerName?: string;
    createdAt?: string;
};

export type ShopProductReviewsResponse = {
    data: ShopProductReview[];
    total: number;
    ratingAverage?: number;
    ratingCount?: number;
};
