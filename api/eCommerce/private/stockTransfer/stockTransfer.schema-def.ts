import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const STOCK_TRANSFER_NOTE_MAX = 2000;

export const stockTransferStatuses = ["draft", "done", "cancelled"] as const;
export type StockTransferStatus = (typeof stockTransferStatuses)[number];

const StockTransferLineDef = {
    product: {type: "objectId", required: true},
    variant: {type: "objectId", required: false},
    quantity: {type: "number", required: true, min: 0.0001},
} as const;

export const StockTransferSchemaDef = {
    fromWarehouse: {type: "objectId", required: true},
    toWarehouse: {type: "objectId", required: true},
    lines: {type: "embeddedArray", required: true, items: StockTransferLineDef, minItems: 1},
    note: {type: "string", required: false, max: STOCK_TRANSFER_NOTE_MAX},
} as const;

export type CreateStockTransferFormType = InferCreateForm<typeof StockTransferSchemaDef>;
export type EditStockTransferFormType = InferEditForm<typeof StockTransferSchemaDef>;
