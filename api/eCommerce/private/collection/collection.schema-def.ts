import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const COLLECTION_NAME_MAX = 128;
export const COLLECTION_DESCRIPTION_MAX = 2000;
export const COLLECTION_SEO_TITLE_MAX = 128;
export const COLLECTION_SEO_DESCRIPTION_MAX = 320;
export const COLLECTION_RULE_VALUE_MAX = 128;
export const COLLECTION_RULES_MAX_ITEMS = 50;

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
    value: {type: "string", required: true, min: 1, max: COLLECTION_RULE_VALUE_MAX},
} as const;

export const CollectionSchemaDef = {
    type: {type: "enum", required: true, options: collectionTypes},
    name: {type: "string", required: true, min: 1, max: COLLECTION_NAME_MAX},
    description: {type: "string", required: false, max: COLLECTION_DESCRIPTION_MAX},
    mainImage: {type: "mediaId", required: false, publicAccess: true},
    position: {type: "number", required: false, min: 0},
    products: {type: "objectIdArray", required: false},
    ruleCondition: {type: "enum", required: false, options: collectionRuleConditions},
    rules: {
        type: "embeddedArray",
        required: false,
        items: CollectionRuleItemDef,
        maxItems: COLLECTION_RULES_MAX_ITEMS,
        requiredWhen: {field: "type", whenValues: ["dynamic"], on: ["create", "edit"]},
    },
    seoTitle: {type: "string", required: false, max: COLLECTION_SEO_TITLE_MAX},
    seoDescription: {type: "string", required: false, max: COLLECTION_SEO_DESCRIPTION_MAX},
} as const;

export type CreateCollectionFormType = InferCreateForm<typeof CollectionSchemaDef>;

export type EditCollectionFormType = InferEditForm<typeof CollectionSchemaDef>;
