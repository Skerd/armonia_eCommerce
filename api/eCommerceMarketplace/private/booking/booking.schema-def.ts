import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const BookingSchemaDef = {
    order: {type: "objectId", required: true},
    startAt: {type: "date", required: true},
    endAt: {type: "date", required: true, afterField: "startAt"},
    timezone: {type: "string", required: false, max: 100},
} as const;

export type CreateBookingFormType = InferCreateForm<typeof BookingSchemaDef>;
export type EditBookingFormType = InferEditForm<typeof BookingSchemaDef>;
