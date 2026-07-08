import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CustomerGroupMemberSchemaDef} from "./customerGroupMember.schema-def";

export function createCustomerGroupMemberFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CustomerGroupMemberSchemaDef, languageCode, form);
}
