import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const listingFlagReasons = ["inappropriate", "spam", "misleading", "other"] as const;
export type ListingFlagReason = (typeof listingFlagReasons)[number];

export const listingFlagStatuses = ["pending", "reviewed", "dismissed"] as const;
export type ListingFlagStatus = (typeof listingFlagStatuses)[number];

export const listingFlagActions = ["none", "deactivate"] as const;

/**
 * `user` / `status` are server-derived. `resolution` is set via resolve/dismiss actions.
 */
export const ListingFlagSchemaDef = {
    listing: {type: "objectId", required: true},
    reason: {type: "enum", required: true, options: listingFlagReasons},
    comment: {type: "string", required: false, max: 2000},
} as const;

/** Edit updates report content only; listing is immutable after create. */
export const EditListingFlagSchemaDef = {
    reason: ListingFlagSchemaDef.reason,
    comment: ListingFlagSchemaDef.comment,
} as const;

export const ResolveListingFlagSchemaDef = {
    resolution: {type: "string", required: true, max: 2000},
    listingAction: {type: "enum", required: false, options: listingFlagActions},
} as const;

export type CreateListingFlagFormType = InferCreateForm<typeof ListingFlagSchemaDef>;
export type EditListingFlagFormType = InferEditForm<typeof EditListingFlagSchemaDef>;
export type ResolveListingFlagFormType = InferCreateForm<typeof ResolveListingFlagSchemaDef> & {_id: string};
