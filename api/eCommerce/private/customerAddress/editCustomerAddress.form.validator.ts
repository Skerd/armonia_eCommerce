import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CustomerAddressSchemaDef} from "./customerAddress.schema-def";

export function editCustomerAddressFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(CustomerAddressSchemaDef, languageCode, form, permissions, readPermissions);
}
