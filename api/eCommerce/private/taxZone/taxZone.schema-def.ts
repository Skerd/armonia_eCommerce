import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const TAX_ZONE_NAME_MAX = 128;
export const TAX_ZONE_RATE_NAME_MAX = 128;
export const TAX_ZONE_POSTAL_CODE_PATTERN_MAX = 64;
export const TAX_ZONE_POSTAL_CODE_PATTERNS_MAX_ITEMS = 50;

export const taxRateAppliesToOptions = ["all", "physical", "digital"] as const;
export type TaxRateAppliesTo = (typeof taxRateAppliesToOptions)[number];

const TaxRateItemDef = {
    name: {type: "string", required: true, min: 1, max: TAX_ZONE_RATE_NAME_MAX},
    rate: {type: "number", required: true, min: 0, max: 100},
    isCompound: {type: "boolean", required: false},
    appliesTo: {type: "enum", required: false, options: taxRateAppliesToOptions},
} as const;

export const TaxZoneSchemaDef = {
    name: {type: "string", required: true, min: 1, max: TAX_ZONE_NAME_MAX},
    country: {type: "objectId", required: true},
    states: {type: "objectIdArray", required: false},
    postalCodePatterns: {
        type: "stringArray",
        required: false,
        maxItems: TAX_ZONE_POSTAL_CODE_PATTERNS_MAX_ITEMS,
        itemMax: TAX_ZONE_POSTAL_CODE_PATTERN_MAX,
    },
    rates: {type: "embeddedArray", required: true, items: TaxRateItemDef, minItems: 1},
    priority: {type: "number", required: false, min: 0},
} as const;

export type CreateTaxZoneFormType = InferCreateForm<typeof TaxZoneSchemaDef>;
export type EditTaxZoneFormType = InferEditForm<typeof TaxZoneSchemaDef>;
