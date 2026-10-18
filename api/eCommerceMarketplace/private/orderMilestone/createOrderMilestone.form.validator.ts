import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {OrderMilestoneSchemaDef} from "./orderMilestone.schema-def";

export function createOrderMilestoneFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(OrderMilestoneSchemaDef, languageCode, form);
}
