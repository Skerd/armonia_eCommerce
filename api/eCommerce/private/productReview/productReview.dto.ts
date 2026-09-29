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
