import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {RequestRevisionSchemaDef} from "./order.schema-def";

export type {RequestRevisionFormType} from "./order.schema-def";

export function requestRevisionFormSchema(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend(
        buildCreateZodSchema(RequestRevisionSchemaDef, languageCode, form).shape,
    );
}
