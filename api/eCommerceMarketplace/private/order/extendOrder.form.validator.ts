import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {ExtendOrderSchemaDef} from "./order.schema-def";

export type {ExtendOrderFormType} from "./order.schema-def";

export function extendOrderFormSchema(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend(
        buildCreateZodSchema(ExtendOrderSchemaDef, languageCode, form).shape,
    );
}
