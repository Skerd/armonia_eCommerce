import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

/**
 * `listing` and `reviewer` are derived server-side from the order / authenticated user.
 */
export const ReviewSchemaDef = {
    order: {type: "objectId", required: true},
    rating: {type: "number", required: true, min: 1, max: 5},
    comment: {type: "string", required: false},
} as const;

export type CreateReviewFormType = InferCreateForm<typeof ReviewSchemaDef>;
