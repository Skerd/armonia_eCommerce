import type {Media} from "../../../../../core/types";
import {LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {InventorySimple} from "../../../../dto/inventory.dto";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductVariantSimple} from "../../../../dto/productVariant.dto";
import type {WarehouseSimple} from "../../../../dto/warehouse.dto";

export type InventoryMovementReason =
    | "restock"
    | "sale"
    | "return"
    | "adjustment"
    | "damage"
    | "transfer_in"
    | "transfer_out"
    | "initial"
    | "write_off";

export type InventoryMovement = OwnershipData & LifeCycleData & {
    _id: string;
    inventory?: InventorySimple;
    product: ProductSimple;
    variant?: ProductVariantSimple;
    warehouse: WarehouseSimple;
    quantity: number;
    reason: InventoryMovementReason;
    note?: string;
    quantityBefore: number;
    quantityAfter: number;
    manufacturer?: string;
    receiptNumber?: string;
    receipts?: Media[];
    occurredAt?: string;
    unitCost?: number;
    batchLot?: string;
    expiryDate?: string;
    performedBy?: SimpleBlankUser;
    referenceType?: string;
    referenceId?: string;
};
