import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FulfillmentSchemaDef} from "./fulfillment.schema-def";

export function editFulfillmentFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(FulfillmentSchemaDef, languageCode, form, permissions, readPermissions);
}
