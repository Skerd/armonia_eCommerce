import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProviderProfileSchemaDef} from "./providerProfile.schema-def";

export function createProviderProfileFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProviderProfileSchemaDef, languageCode, form);
}
