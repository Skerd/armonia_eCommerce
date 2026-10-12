import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StockCountSchemaDef} from "./stockCount.schema-def";

export function editStockCountFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(StockCountSchemaDef, languageCode, form, permissions, readPermissions);
}
