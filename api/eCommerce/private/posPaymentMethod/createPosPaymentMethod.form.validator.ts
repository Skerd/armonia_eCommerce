import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PosPaymentMethodSchemaDef} from "./posPaymentMethod.schema-def";

export function createPosPaymentMethodFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PosPaymentMethodSchemaDef, languageCode, form);
}
