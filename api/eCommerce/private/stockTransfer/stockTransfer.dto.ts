import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductVariantSimple} from "../../../../dto/productVariant.dto";
import type {WarehouseSimple} from "../../../../dto/warehouse.dto";
import type {StockTransferStatus} from "./stockTransfer.schema-def";

export type StockTransfer = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    fromWarehouse: WarehouseSimple;
    toWarehouse: WarehouseSimple;
    lines: {product: ProductSimple; variant?: ProductVariantSimple; quantity: number}[];
    status: StockTransferStatus;
    note?: string;
    doneBy?: SimpleBlankUser;
    doneAt?: string;
};
