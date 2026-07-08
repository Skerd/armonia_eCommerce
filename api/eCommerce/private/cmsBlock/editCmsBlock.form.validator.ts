import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CmsBlockSchemaDef} from "./cmsBlock.schema-def";
import {z} from "zod";

export function editCmsBlockFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    const base = buildEditZodSchema(CmsBlockSchemaDef, languageCode, form, permissions, readPermissions);
    return base.extend({
        config: z.any().optional(),
    });
}
