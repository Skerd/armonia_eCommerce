import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {EditOrderSchemaDef} from "./order.schema-def";

export type {EditOrderFormType} from "./order.schema-def";

export function editOrderFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {}) {
    return buildEditZodSchema(EditOrderSchemaDef, languageCode, form, permissions, readPermissions);
}
