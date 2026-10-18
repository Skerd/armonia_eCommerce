import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const orderRevisionStatuses = ["pending", "completed"] as const;
export type OrderRevisionStatus = (typeof orderRevisionStatuses)[number];

/**
 * Full field set for SchemaDef↔Mongoose validation.
 * requestedBy / status are server-derived on create via OrderActions.requestRevision.
 */
export const OrderRevisionSchemaDef = {
    order: {type: "objectId", required: true},
    delivery: {type: "objectId", required: true},
    reason: {type: "string", required: true},
} as const;

export type CreateOrderRevisionFormType = InferCreateForm<typeof OrderRevisionSchemaDef>;
