import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {InventorySchemaDef} from "./inventory.schema-def";

export function editInventoryFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(InventorySchemaDef, languageCode, form, permissions, readPermissions);
}
