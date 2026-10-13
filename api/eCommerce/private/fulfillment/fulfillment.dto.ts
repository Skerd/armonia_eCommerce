import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductVariantSimple} from "../../../../dto/productVariant.dto";
import type {ProductOrderSimple} from "../../../../dto/productOrder.dto";

/** Catalog product and the sale snapshot of the order line this shipment covers. */
export type FulfillmentItem = {
    orderItemId: string;
    quantity: number;
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

export type Fulfillment = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    order: ProductOrderSimple;
    items: FulfillmentItem[];
    carrier?: string;
    trackingNumber?: string;
    trackingUrl?: string;
    shippedAt?: string;
    estimatedDeliveryAt?: string;
    deliveredAt?: string;
    status: string;
    notes?: string;
};
