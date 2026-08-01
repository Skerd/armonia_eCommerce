import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ReturnRequestSchemaDef} from "./returnRequest.schema-def";

export function createReturnRequestFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ReturnRequestSchemaDef, languageCode, form);
}
