import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ReturnRequestSchemaDef} from "./returnRequest.schema-def";
import {z} from "zod";

export function createReturnRequestFormSchema(languageCode: string, form: any = null) {
    const base = buildCreateZodSchema(ReturnRequestSchemaDef, languageCode, form);
    return base.extend({
        notes: z.string().optional(),
    });
}
