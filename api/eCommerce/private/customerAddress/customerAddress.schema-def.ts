import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const customerAddressTypes = ["billing", "shipping"] as const;
export type CustomerAddressType = (typeof customerAddressTypes)[number];

export const CustomerAddressSchemaDef = {
    customer: {type: "objectId", required: true},
    type: {type: "enum", required: true, options: customerAddressTypes},
    firstName: {type: "string", required: true},
    lastName: {type: "string", required: true},
    email: {type: "string", required: false, format: "email"},
    phone: {type: "string", required: false},
    street: {type: "string", required: true},
    city: {type: "objectId", required: true},
    state: {type: "objectId", required: false},
    postalCode: {type: "string", required: false},
    country: {type: "objectId", required: true},
    latitude: {type: "number", required: true},
    longitude: {type: "number", required: true},
    label: {type: "string", required: false},
} as const;

export type CreateCustomerAddressFormType = InferCreateForm<typeof CustomerAddressSchemaDef>;
export type EditCustomerAddressFormType = InferEditForm<typeof CustomerAddressSchemaDef> & {_id: string};
