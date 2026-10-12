import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const STOCK_COUNT_NOTE_MAX = 2000;

export const stockCountStatuses = ["draft", "applied", "cancelled"] as const;
export type StockCountStatus = (typeof stockCountStatuses)[number];

/** `expectedQuantity` is not entered: the server snapshots it from the stock row. */
const StockCountLineDef = {
    product: {type: "objectId", required: true},
    variant: {type: "objectId", required: false},
    countedQuantity: {type: "number", required: false, min: 0},
} as const;

export const StockCountSchemaDef = {
    warehouse: {type: "objectId", required: true},
    lines: {type: "embeddedArray", required: false, items: StockCountLineDef},
    note: {type: "string", required: false, max: STOCK_COUNT_NOTE_MAX},
} as const;

export type CreateStockCountFormType = InferCreateForm<typeof StockCountSchemaDef>;
export type EditStockCountFormType = InferEditForm<typeof StockCountSchemaDef>;
