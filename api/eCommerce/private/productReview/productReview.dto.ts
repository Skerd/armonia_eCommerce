import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ProductOrderSimple} from "../../../../dto/productOrder.dto";
import type {ProductSimple} from "../../../../dto/product.dto";

export type ProductReview = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    order?: ProductOrderSimple;
    product?: ProductSimple;
    rating: number;
    title?: string;
    comment?: string;
    reviewer?: SimpleUser;
    /** Set when the platform hid the review after a report (D191): gone from the shop and from the product's rating. */
    hiddenByPlatform?: boolean;
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

/** The kind the platform's report desk knows this review by (the module's `reportables`, D191). */
export const PRODUCT_REVIEW_REPORT_KIND = "eCommerce.productReview";
