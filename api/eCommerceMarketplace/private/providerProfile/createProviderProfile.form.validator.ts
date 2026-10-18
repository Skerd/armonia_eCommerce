import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {ProviderProfileSchemaDef} from "./providerProfile.schema-def";

export function createProviderProfileFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProviderProfileSchemaDef, languageCode, form).extend({
        userId: isObjectIdZod(form?.["userIdLabel"] ?? "userId", languageCode).optional(),
    });
}
