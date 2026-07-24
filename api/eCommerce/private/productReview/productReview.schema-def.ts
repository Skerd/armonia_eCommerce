import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ProductReviewSchemaDef = {
    order: {type: "objectId", required: true},
    product: {type: "objectId", required: true},
    rating: {type: "number", required: true, min: 1, max: 5},
    title: {type: "string", required: false},
    comment: {type: "string", required: false},
    reviewer: {type: "objectId", required: true},
} as const;

/** Buyers submit orderId + productId; order/product/reviewer are derived server-side. */
export type CreateProductReviewFormType = Omit<
    InferCreateForm<typeof ProductReviewSchemaDef>,
    "order" | "product" | "reviewer"
> & {
    orderId: string;
    productId: string;
};
