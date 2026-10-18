import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ProviderAvailabilitySlotDef = {
    dayOfWeek: {type: "number", required: true, min: 0},
    startTime: {type: "string", required: true},
    endTime: {type: "string", required: true},
} as const;

/** `user` is set server-side from the authenticated user — excluded from forms. */
export const ProviderProfileSchemaDef = {
    skills: {type: "stringArray", required: false},
    bio: {type: "string", required: false},
    portfolio: {type: "objectIdArray", required: false},
    availability: {
        type: "embeddedArray",
        required: false,
        items: ProviderAvailabilitySlotDef,
    },
} as const;

export type CreateProviderProfileFormType = InferCreateForm<typeof ProviderProfileSchemaDef>;
export type EditProviderProfileFormType = InferEditForm<typeof ProviderProfileSchemaDef>;
