import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PosConfigSchemaDef} from "./posConfig.schema-def";

export function createPosConfigFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PosConfigSchemaDef, languageCode, form).extend({
        managerPin: z.string().min(4).max(64).optional(),
    });
}
