import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StockTransferSchemaDef} from "./stockTransfer.schema-def";

export function createStockTransferFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(StockTransferSchemaDef, languageCode, form);
}
