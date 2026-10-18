import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BidSchemaDef} from "./bid.schema-def";

export function editBidFormSchema(languageCode: string, form: any = null, permissions: Record<string, unknown> = {}, readPermissions: Record<string, unknown> = {},) {
    return buildEditZodSchema(BidSchemaDef, languageCode, form, permissions, readPermissions);
}
