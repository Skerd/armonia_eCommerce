import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PromotionSchemaDef} from "./promotion.schema-def";

export function editPromotionFormSchema(languageCode: string,form: any = null,permissions: Record<string, unknown> = {},readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(PromotionSchemaDef, languageCode, form, permissions, readPermissions);
}
