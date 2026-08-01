import type {Media} from "../../../../../core/types";
import {LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

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
    inventory?: {_id: string};
    product: {_id: string; title: string; sku?: string};
    variant?: {_id: string; sku?: string; attributeCombination?: {attribute: {name: string}; value: string}[]};
    warehouse: {_id: string; name: string; code: string};
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
    performedBy?: {_id: string; name: string; surname: string};
    referenceType?: string;
    referenceId?: string;
};
