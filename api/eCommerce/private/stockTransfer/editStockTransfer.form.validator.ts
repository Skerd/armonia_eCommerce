import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StockTransferSchemaDef} from "./stockTransfer.schema-def";

export function editStockTransferFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(StockTransferSchemaDef, languageCode, form, permissions, readPermissions);
}
