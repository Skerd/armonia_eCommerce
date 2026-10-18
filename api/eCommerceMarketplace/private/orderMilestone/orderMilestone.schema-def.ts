import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const orderMilestoneStatuses = ["pending", "released", "delivered"] as const;
export type OrderMilestoneStatus = (typeof orderMilestoneStatuses)[number];

/** `currency` and `status` are server-derived: a milestone is always in its order's currency. */
export const OrderMilestoneSchemaDef = {
    order: {type: "objectId", required: true},
    name: {type: "string", required: true, max: 200},
    amount: {type: "number", required: true, min: 0},
    orderIndex: {type: "number", required: false, min: 0},
} as const;

export const ReleaseOrderMilestoneSchemaDef = {
    milestone: {type: "objectId", required: true},
} as const;

export type CreateOrderMilestoneFormType = InferCreateForm<typeof OrderMilestoneSchemaDef>;
export type ReleaseOrderMilestoneFormType = InferCreateForm<typeof ReleaseOrderMilestoneSchemaDef>;
