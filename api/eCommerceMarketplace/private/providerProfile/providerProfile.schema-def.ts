import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ProviderAvailabilitySlotDef = {
    dayOfWeek: {type: "number", required: true, min: 0, max: 6},
    startTime: {type: "string", required: true},
    endTime: {type: "string", required: true},
} as const;

/** `user` is not a schema field: the server sets it (see `CreateProviderProfileFormType`). */
export const ProviderProfileSchemaDef = {
    skills: {type: "stringArray", required: false},
    bio: {type: "string", required: false},
    portfolio: {type: "mediaIdArray", required: false, publicAccess: true},
    availability: {
        type: "embeddedArray",
        required: false,
        items: ProviderAvailabilitySlotDef,
    },
} as const;

/** `userId` names the profile's user; it defaults to the caller. */
export type CreateProviderProfileFormType = InferCreateForm<typeof ProviderProfileSchemaDef> & {userId?: string};
export type EditProviderProfileFormType = InferEditForm<typeof ProviderProfileSchemaDef>;
