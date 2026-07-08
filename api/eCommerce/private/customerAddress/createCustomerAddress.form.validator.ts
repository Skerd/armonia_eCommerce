import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CustomerAddressSchemaDef} from "./customerAddress.schema-def";

export function createCustomerAddressFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CustomerAddressSchemaDef, languageCode, form);
}
