import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {OrderRevisionSchemaDef} from "./orderRevision.schema-def";

export function createOrderRevisionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(OrderRevisionSchemaDef, languageCode, form);
}
