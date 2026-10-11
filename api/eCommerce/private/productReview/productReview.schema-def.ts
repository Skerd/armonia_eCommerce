import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const PRODUCT_REVIEW_TITLE_MAX = 128;
export const PRODUCT_REVIEW_COMMENT_MAX = 2000;

export const ProductReviewSchemaDef = {
    order: {type: "objectId", required: true},
    product: {type: "objectId", required: true},
    rating: {type: "number", required: true, min: 1, max: 5},
    title: {type: "string", required: false, max: PRODUCT_REVIEW_TITLE_MAX},
    comment: {type: "string", required: false, max: PRODUCT_REVIEW_COMMENT_MAX},
} as const;

export type CreateProductReviewFormType = InferCreateForm<typeof ProductReviewSchemaDef>;
export type EditProductReviewFormType = InferEditForm<typeof ProductReviewSchemaDef>;
