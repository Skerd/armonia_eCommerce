import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {DiscountSchemaDef} from "./discount.schema-def";
import {refineBuyXGetY} from "./buyXGetY.refine";

export function editDiscountFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(DiscountSchemaDef, languageCode, form, permissions, readPermissions).superRefine(
        refineBuyXGetY(languageCode, form),
    );
}
