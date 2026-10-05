import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CUSTOMER_GROUP_NAME_MAX = 128;
export const CUSTOMER_GROUP_DESCRIPTION_MAX = 500;

export const CustomerGroupSchemaDef = {
    name: {type: "string", required: true, min: 1, max: CUSTOMER_GROUP_NAME_MAX},
    description: {type: "string", required: false, max: CUSTOMER_GROUP_DESCRIPTION_MAX},
} as const;

export type CreateCustomerGroupFormType = InferCreateForm<typeof CustomerGroupSchemaDef>;
export type EditCustomerGroupFormType = InferEditForm<typeof CustomerGroupSchemaDef>;
