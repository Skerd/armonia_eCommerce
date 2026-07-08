import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {TaxZoneSchemaDef} from "./taxZone.schema-def";

export function createTaxZoneFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(TaxZoneSchemaDef, languageCode, form);
}
