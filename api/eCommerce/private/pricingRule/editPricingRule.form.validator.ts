import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PricingRuleSchemaDef} from "./pricingRule.schema-def";

export function editPricingRuleFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(PricingRuleSchemaDef, languageCode, form, permissions, readPermissions);
}
