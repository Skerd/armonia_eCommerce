import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {AcceptOrderDeliverySchemaDef} from "./orderDelivery.schema-def";

export function acceptOrderDeliveryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(AcceptOrderDeliverySchemaDef, languageCode, form);
}
