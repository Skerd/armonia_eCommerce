import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PosConfigSchemaDef} from "./posConfig.schema-def";

export function createPosConfigFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PosConfigSchemaDef, languageCode, form);
}
