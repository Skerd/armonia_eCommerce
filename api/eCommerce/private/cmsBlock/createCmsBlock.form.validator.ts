import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CmsBlockSchemaDef} from "./cmsBlock.schema-def";
import {z} from "zod";

export function createCmsBlockFormSchema(languageCode: string, form: any = null) {
    const base = buildCreateZodSchema(CmsBlockSchemaDef, languageCode, form);
    return base.extend({
        config: z.any(),
    });
}
