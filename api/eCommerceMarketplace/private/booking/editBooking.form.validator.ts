import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BookingSchemaDef} from "./booking.schema-def";

export function editBookingFormSchema(languageCode: string,form: any = null,permissions: Record<string, unknown> = {},readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(BookingSchemaDef, languageCode, form, permissions, readPermissions);
}
