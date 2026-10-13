import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductVariantSimple} from "../../../../dto/productVariant.dto";
import type {ProductOrderSimple} from "../../../../dto/productOrder.dto";

/** Catalog product and the sale snapshot of the order line this return covers. */
export type ReturnRequestItem = {
    orderItemId: string;
    quantity: number;
    reason: string;
    product?: ProductSimple;
    variant?: ProductVariantSimple;
    snapshot?: {
        title?: string;
        sku?: string;
        imageUrl?: string;
        variantLabel?: string;
        productType?: string;
    };
};

export type ReturnRequest = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    order: ProductOrderSimple;
    type: string;
    status: string;
    items: ReturnRequestItem[];
    refundAmount?: number;
    customerNote?: string;
    adminNote?: string;
    resolvedBy?: SimpleBlankUser;
    resolvedAt?: string;
};
