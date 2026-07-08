import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const taxRateAppliesToOptions = ["all", "physical", "digital"] as const;
export type TaxRateAppliesTo = (typeof taxRateAppliesToOptions)[number];

const TaxRateItemDef = {
    name: {type: "string", required: true},
    rate: {type: "number", required: true, min: 0, max: 100},
    isCompound: {type: "boolean", required: false},
    appliesTo: {type: "enum", required: false, options: taxRateAppliesToOptions},
} as const;

export const TaxZoneSchemaDef = {
    name: {type: "string", required: true},
    country: {type: "objectId", required: true},
    states: {type: "objectIdArray", required: false},
    postalCodePatterns: {type: "stringArray", required: false},
    rates: {type: "embeddedArray", required: true, items: TaxRateItemDef, minItems: 1},
    priority: {type: "number", required: false, min: 0},
    isActive: {type: "boolean", required: false},
} as const;

export type CreateTaxZoneFormType = InferCreateForm<typeof TaxZoneSchemaDef>;
export type EditTaxZoneFormType = InferEditForm<typeof TaxZoneSchemaDef>;
