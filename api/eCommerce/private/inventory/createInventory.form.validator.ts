import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {InventorySchemaDef} from "./inventory.schema-def";

export function createInventoryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(InventorySchemaDef, languageCode, form);
}
