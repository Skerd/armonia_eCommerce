import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {WarehouseSchemaDef} from "./warehouse.schema-def";

export function createWarehouseFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(WarehouseSchemaDef, languageCode, form);
}
