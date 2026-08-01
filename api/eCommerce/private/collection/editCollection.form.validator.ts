import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CollectionSchemaDef} from "./collection.schema-def";

export function editCollectionFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(CollectionSchemaDef, languageCode, form, permissions, readPermissions);
}
