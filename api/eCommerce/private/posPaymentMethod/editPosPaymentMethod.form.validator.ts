import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PosPaymentMethodSchemaDef} from "./posPaymentMethod.schema-def";

export function editPosPaymentMethodFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(PosPaymentMethodSchemaDef, languageCode, form, permissions, readPermissions);
}
