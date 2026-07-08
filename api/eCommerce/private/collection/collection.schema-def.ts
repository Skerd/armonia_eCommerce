import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const collectionRuleFields = ["tag", "brand", "category", "price", "vendor", "inventory_level", "product_type"] as const;
export const collectionRuleOperators = ["equals", "not_equals", "contains", "not_contains", "greater_than", "less_than", "starts_with"] as const;
export const collectionRuleConditions = ["all", "any"] as const;
export const collectionTypes = ["manual", "dynamic"] as const;

export type CollectionRuleField = (typeof collectionRuleFields)[number];
export type CollectionRuleOperator = (typeof collectionRuleOperators)[number];
export type CollectionRuleCondition = (typeof collectionRuleConditions)[number];
export type CollectionType = (typeof collectionTypes)[number];

const CollectionRuleItemDef = {
    field: {type: "enum", required: true, options: collectionRuleFields},
    operator: {type: "enum", required: true, options: collectionRuleOperators},
    value: {type: "string", required: true},
} as const;

export const CollectionSchemaDef = {
    type: {type: "enum", required: true, options: collectionTypes},
    name: {type: "string", required: true},
    slug: {type: "string", required: false, format: "slug"},
    description: {type: "string", required: false},
    mainImage: {type: "mediaId", required: false},
    isVisible: {type: "boolean", required: false},
    position: {type: "number", required: false, min: 0},
    products: {type: "objectIdArray", required: false},
    ruleCondition: {type: "enum", required: false, options: collectionRuleConditions},
    rules: {type: "embeddedArray", required: false, items: CollectionRuleItemDef},
    seoTitle: {type: "string", required: false},
    seoDescription: {type: "string", required: false},
    publishedAt: {type: "date", required: false},
} as const;

export type CreateCollectionFormType = InferCreateForm<typeof CollectionSchemaDef>;

export type EditCollectionFormType = InferEditForm<typeof CollectionSchemaDef>;
