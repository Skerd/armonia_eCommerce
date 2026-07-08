import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FulfillmentSchemaDef} from "./fulfillment.schema-def";

export function createFulfillmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(FulfillmentSchemaDef, languageCode, form);
}
