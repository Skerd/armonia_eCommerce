import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CustomerGroupSchemaDef} from "./customerGroup.schema-def";

export function editCustomerGroupFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(CustomerGroupSchemaDef, languageCode, form, permissions, readPermissions);
}
