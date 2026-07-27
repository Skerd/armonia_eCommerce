import type {InventoryMovement} from "../inventoryMovement/inventoryMovement.dto";

export type Inventory = {
    _id: string;
    product: {_id: string; title: string; sku?: string};
    variant?: {_id: string; sku?: string; attributeCombination?: {attribute: {name: string}; value: string}[]};
    warehouse: {_id: string; name: string; code: string};
    quantityOnHand: number;
    quantityReserved: number;
    quantityAvailable: number;
    reorderPoint?: number;
    reorderQuantity?: number;
    lowStockAlertSent?: boolean;
    company?: {_id: string; name: string};
    /** Present on /single when enrichSingle loads recent movements. */
    movements?: InventoryMovement[];
};

export type InventoryAdjustmentForm = {
    productId: string;
    variantId?: string;
    warehouseId: string;
    quantity: number;
    reason: "restock" | "sale" | "return" | "adjustment" | "damage" | "transfer_in" | "transfer_out" | "write_off";
    note?: string;
};
