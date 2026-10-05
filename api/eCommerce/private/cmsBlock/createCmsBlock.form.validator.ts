import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CmsBlockSchemaDef} from "./cmsBlock.schema-def";

export function createCmsBlockFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CmsBlockSchemaDef, languageCode, form);
}
