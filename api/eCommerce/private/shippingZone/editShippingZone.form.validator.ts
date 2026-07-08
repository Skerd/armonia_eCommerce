import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ShippingZoneSchemaDef} from "./shippingZone.schema-def";

export function editShippingZoneFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(ShippingZoneSchemaDef, languageCode, form, permissions, readPermissions);
}
