import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {DisputeSchemaDef} from "./dispute.schema-def";

export function createDisputeFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(DisputeSchemaDef, languageCode, form);
}
