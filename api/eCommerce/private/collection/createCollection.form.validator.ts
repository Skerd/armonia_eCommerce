import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CollectionSchemaDef} from "./collection.schema-def";

export function createCollectionFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CollectionSchemaDef, languageCode, form);
}
