import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductVariantSimple} from "../../../../dto/productVariant.dto";
import type {WarehouseSimple} from "../../../../dto/warehouse.dto";

export type Inventory = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    product: ProductSimple;
    variant?: ProductVariantSimple;
    warehouse: WarehouseSimple;
    quantityOnHand: number;
    quantityReserved: number;
    quantityAvailable: number;
    reorderPoint?: number;
    reorderQuantity?: number;
    lowStockAlertSent?: boolean;
};
