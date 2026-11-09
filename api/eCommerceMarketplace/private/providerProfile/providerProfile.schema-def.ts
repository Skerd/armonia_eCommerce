import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {WeeklyHoursSlotDef} from "../../../../../core/helpers/weeklyHours.schema-def";

export const PROVIDER_PROFILE_TIMEZONE_MAX = 64;

/** `user` is not a schema field: the server sets it (see `CreateProviderProfileFormType`). */
export const ProviderProfileSchemaDef = {
    skills: {type: "stringArray", required: false},
    bio: {type: "string", required: false},
    portfolio: {type: "mediaIdArray", required: false, publicAccess: true},
    /** Weekly windows a booking must fall inside (D105), in `timezone`; empty means no restriction. */
    availability: {
        type: "embeddedArray",
        required: false,
        items: WeeklyHoursSlotDef,
    },
    /** IANA zone of the availability windows; empty means the company's zone (D91). */
    timezone: {type: "string", required: false, max: PROVIDER_PROFILE_TIMEZONE_MAX},
} as const;

/** `userId` names the profile's user; it defaults to the caller. */
export type CreateProviderProfileFormType = InferCreateForm<typeof ProviderProfileSchemaDef> & {userId?: string};
export type EditProviderProfileFormType = InferEditForm<typeof ProviderProfileSchemaDef>;
