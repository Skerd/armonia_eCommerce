import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {OrderDeliverySchemaDef} from "./orderDelivery.schema-def";

export function createOrderDeliveryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(OrderDeliverySchemaDef, languageCode, form);
}
