import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CustomerAddressSchemaDef = {
    firstName: {type: "string", required: true},
    lastName: {type: "string", required: true},
    phone: {type: "string", required: false},
    street: {type: "string", required: true},
    city: {type: "string", required: true},
    state: {type: "string", required: false},
    postalCode: {type: "string", required: false},
    country: {type: "objectId", required: true},
    isDefault: {type: "boolean", required: false},
    label: {type: "string", required: false},
} as const;

export type CreateCustomerAddressFormType = InferCreateForm<typeof CustomerAddressSchemaDef>;
export type EditCustomerAddressFormType = InferEditForm<typeof CustomerAddressSchemaDef> & {_id: string};
