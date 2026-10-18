import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

/**
 * Bid status is a Mongoose enum — not expressible in SchemaDef; validated in Mongoose only.
 * bidder and currency are derived server-side (bidder = current user, currency = from taskRequest).
 */
export const BidSchemaDef = {
    taskRequest:  {type: "objectId", required: true},
    amount:       {type: "number",   required: true, min: 0},
    proposal:     {type: "string",   required: true},
    deliveryDays: {type: "number",   required: true, min: 0},
} as const;

export type CreateBidFormType = InferCreateForm<typeof BidSchemaDef>;
