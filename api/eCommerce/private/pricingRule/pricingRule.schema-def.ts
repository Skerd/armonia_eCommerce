import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const pricingRuleTypes = ["percentage_discount", "fixed_discount", "fixed_price", "surcharge"] as const;
export const pricingRuleAppliesTo = ["all", "product", "category", "collection", "customer_group"] as const;
export type PricingRuleType = (typeof pricingRuleTypes)[number];
export type PricingRuleAppliesTo = (typeof pricingRuleAppliesTo)[number];

export const PricingRuleSchemaDef = {
    name: {type: "string", required: true},
    type: {type: "enum", required: true, options: pricingRuleTypes},
    value: {type: "number", required: true, min: 0},
    appliesTo: {type: "enum", required: true, options: pricingRuleAppliesTo},
    targetIds: {type: "objectIdArray", required: false},
    customerGroups: {type: "objectIdArray", required: false},
    minimumOrderAmount: {type: "number", required: false, min: 0},
    minimumQuantity: {type: "number", required: false, min: 0},
    priority: {type: "number", required: false, min: 0},
    isActive: {type: "boolean", required: false},
    startsAt: {type: "date", required: false},
    endsAt: {type: "date", required: false},
} as const;

export type CreatePricingRuleFormType = InferCreateForm<typeof PricingRuleSchemaDef>;
export type EditPricingRuleFormType = InferEditForm<typeof PricingRuleSchemaDef>;
