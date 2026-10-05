import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CmsBlockSchemaDef} from "./cmsBlock.schema-def";

export function editCmsBlockFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(CmsBlockSchemaDef, languageCode, form, permissions, readPermissions);
}
