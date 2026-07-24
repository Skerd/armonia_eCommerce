import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PosSessionSchemaDef} from "./posSession.schema-def";

export function createPosSessionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PosSessionSchemaDef, languageCode, form);
}
