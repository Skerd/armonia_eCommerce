import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// SchemaDef drives validators and create/update builders for user-editable fields.
// System-managed fields excluded from SchemaDef (and excludePaths on validateSchemaDefAgainstMongoose):
//   quantityReserved, lowStockAlertSent
// product/warehouse list filters use the standard DSL filter body.

export const InventorySchemaDef = {
    product: {type: "objectId", required: true},
    variant: {type: "objectId", required: false},
    warehouse: {type: "objectId", required: true},
    quantityOnHand: {type: "number", required: false, min: 0},
    reorderPoint: {type: "number", required: false, min: 0},
    reorderQuantity: {type: "number", required: false, min: 0},
} as const;

export type CreateInventoryFormType = InferCreateForm<typeof InventorySchemaDef>;
export type EditInventoryFormType = InferEditForm<typeof InventorySchemaDef>;
