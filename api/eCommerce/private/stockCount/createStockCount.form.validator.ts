import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StockCountSchemaDef} from "./stockCount.schema-def";

export function createStockCountFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(StockCountSchemaDef, languageCode, form);
}
