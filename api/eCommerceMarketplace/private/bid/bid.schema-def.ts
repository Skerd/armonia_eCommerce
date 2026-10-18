import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

/**
 * `status` is server-set (BidActions); bidder and currency are derived server-side
 * (bidder = current user, currency = from the task request).
 */
export const BidSchemaDef = {
    taskRequest:  {type: "objectId", required: true},
    amount:       {type: "number",   required: true, min: 0},
    proposal:     {type: "string",   required: true, max: 5000},
    deliveryDays: {type: "number",   required: true, min: 0},
} as const;

export type CreateBidFormType = InferCreateForm<typeof BidSchemaDef>;
