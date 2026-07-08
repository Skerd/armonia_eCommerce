import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CustomerGroupSchemaDef} from "./customerGroup.schema-def";

export function createCustomerGroupFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CustomerGroupSchemaDef, languageCode, form);
}
