import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PricingRuleSchemaDef} from "./pricingRule.schema-def";

export function createPricingRuleFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PricingRuleSchemaDef, languageCode, form);
}
