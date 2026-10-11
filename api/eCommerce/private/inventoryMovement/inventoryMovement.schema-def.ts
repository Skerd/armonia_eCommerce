import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const INVENTORY_MOVEMENT_TEXT_MAX = 200;
export const INVENTORY_MOVEMENT_NOTE_MAX = 2000;
export const INVENTORY_MOVEMENT_RECEIPT_MAX = 20;

export const inventoryMovementReasons = [
    "restock",
    "sale",
    "return",
    "adjustment",
    "damage",
    "transfer_in",
    "transfer_out",
    "initial",
    "write_off",
] as const;

export type InventoryMovementReason = (typeof inventoryMovementReasons)[number];

/**
 * Ledger rows are written by stock actions, not by a panel form.
 * The def exists so the Mongoose schema cannot drift from the wire contract.
 */
export const InventoryMovementSchemaDef = {
    inventory: {type: "objectId", required: false},
    product: {type: "objectId", required: true},
    variant: {type: "objectId", required: false},
    warehouse: {type: "objectId", required: true},
    quantity: {type: "number", required: true},
    reason: {type: "enum", required: true, options: inventoryMovementReasons},
    note: {type: "string", required: false, max: INVENTORY_MOVEMENT_NOTE_MAX},
    quantityBefore: {type: "number", required: true},
    quantityAfter: {type: "number", required: true},
    manufacturer: {type: "string", required: false, max: INVENTORY_MOVEMENT_TEXT_MAX},
    receiptNumber: {type: "string", required: false, max: INVENTORY_MOVEMENT_TEXT_MAX},
    receipts: {type: "mediaIdArray", required: false},
    occurredAt: {type: "date", required: false},
    unitCost: {type: "number", required: false, min: 0},
    batchLot: {type: "string", required: false, max: INVENTORY_MOVEMENT_TEXT_MAX},
    expiryDate: {type: "date", required: false},
    performedBy: {type: "objectId", required: false},
    referenceType: {type: "string", required: false},
    referenceId: {type: "objectId", required: false},
} as const;

export type CreateInventoryMovementFormType = InferCreateForm<typeof InventoryMovementSchemaDef>;
export type EditInventoryMovementFormType = InferEditForm<typeof InventoryMovementSchemaDef>;
