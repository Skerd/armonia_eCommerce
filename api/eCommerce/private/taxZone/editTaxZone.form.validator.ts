import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {TaxZoneSchemaDef} from "./taxZone.schema-def";

export function editTaxZoneFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(TaxZoneSchemaDef, languageCode, form, permissions, readPermissions);
}
