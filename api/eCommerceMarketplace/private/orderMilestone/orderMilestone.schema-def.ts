import type {InferCreateForm} from "../../../../../core/helpers/schemaDefBuilder";

export const orderMilestoneStatuses = ["pending", "released", "delivered"] as const;
export type OrderMilestoneStatus = (typeof orderMilestoneStatuses)[number];

export const OrderMilestoneSchemaDef = {
    order: {type: "objectId", required: true},
    name: {type: "string", required: true},
    amount: {type: "number", required: true, min: 0},
    currency: {type: "objectId", required: true},
    orderIndex: {type: "number", required: false, min: 0},
} as const;

export const ReleaseOrderMilestoneSchemaDef = {
    milestone: {type: "objectId", required: true},
} as const;

export type CreateOrderMilestoneFormType = InferCreateForm<typeof OrderMilestoneSchemaDef>;
export type ReleaseOrderMilestoneFormType = InferCreateForm<typeof ReleaseOrderMilestoneSchemaDef>;
