import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductVariantSimple} from "../../../../dto/productVariant.dto";
import type {WarehouseSimple} from "../../../../dto/warehouse.dto";
import type {StockCountStatus} from "./stockCount.schema-def";

export type StockCount = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    warehouse: WarehouseSimple;
    lines: {
        product: ProductSimple;
        variant?: ProductVariantSimple;
        expectedQuantity: number;
        countedQuantity?: number;
    }[];
    status: StockCountStatus;
    note?: string;
    appliedBy?: SimpleBlankUser;
    appliedAt?: string;
};
