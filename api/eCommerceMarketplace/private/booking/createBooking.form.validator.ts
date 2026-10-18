import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BookingSchemaDef} from "./booking.schema-def";

export function createBookingFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(BookingSchemaDef, languageCode, form);
}
