import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductAttributeSimple} from "../../../../dto/productAttribute.dto";

export type ProductVariant = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    product: ProductSimple;
    sku?: string;
    barcode?: string;
    attributeCombination?: {attribute: ProductAttributeSimple; value: string}[];
    price?: number;
    compareAtPrice?: number;
    costPrice?: number;
    currency?: CurrencySimple;
    weight?: number;
    dimensions?: {length?: number; width?: number; height?: number};
    mainImage?: Media;
    position?: number;
    status: "active" | "inactive";
    trackInventory?: boolean;
    inventoryQuantity?: number;
};
