import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {ProductSimpleRef} from "../product/product.dto";

export type ProductVariant = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    product: ProductSimpleRef;
    sku?: string;
    barcode?: string;
    attributeCombination?: {attribute: {_id: string; name: string}; value: string}[];
    price?: number;
    compareAtPrice?: number;
    costPrice?: number;
    currency?: {_id: string; name: string; symbol: string; abbreviation: string};
    weight?: number;
    dimensions?: {length?: number; width?: number; height?: number};
    mainImage?: Media;
    position?: number;
    status: "active" | "inactive";
    trackInventory?: boolean;
    inventoryQuantity?: number;
    company?: {_id: string; name: string};
};
