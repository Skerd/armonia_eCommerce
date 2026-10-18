import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const disputeStatuses = ["open", "under_review", "resolved", "closed"] as const;
export type DisputeStatus = (typeof disputeStatuses)[number];

/**
 * `initiator` / `status` are server-derived. `resolution` is set via the resolve action.
 */
export const DisputeSchemaDef = {
    order: {type: "objectId", required: true},
    reason: {type: "string", required: true, max: 2000},
} as const;

export const ResolveDisputeSchemaDef = {
    resolution: {type: "string", required: true, max: 2000},
} as const;

export type CreateDisputeFormType = InferCreateForm<typeof DisputeSchemaDef>;
export type ResolveDisputeFormType = InferCreateForm<typeof ResolveDisputeSchemaDef> & {_id: string};
