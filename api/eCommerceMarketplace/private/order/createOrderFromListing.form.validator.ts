import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CreateOrderFromListingSchemaDef} from "./order.schema-def";

export type {CreateOrderFromListingFormType} from "./order.schema-def";

export function createOrderFromListingFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CreateOrderFromListingSchemaDef, languageCode, form);
}
