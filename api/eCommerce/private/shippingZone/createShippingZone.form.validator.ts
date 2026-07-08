import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ShippingZoneSchemaDef} from "./shippingZone.schema-def";

export function createShippingZoneFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ShippingZoneSchemaDef, languageCode, form);
}
