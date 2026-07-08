import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {WarehouseSchemaDef} from "./warehouse.schema-def";

export function editWarehouseFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(WarehouseSchemaDef, languageCode, form, permissions, readPermissions);
}
