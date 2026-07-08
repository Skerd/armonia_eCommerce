import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CustomerGroupSchemaDef = {
    name: {type: "string", required: true},
    description: {type: "string", required: false},
    isDefault: {type: "boolean", required: false},
} as const;

export type CreateCustomerGroupFormType = InferCreateForm<typeof CustomerGroupSchemaDef>;
export type EditCustomerGroupFormType = InferEditForm<typeof CustomerGroupSchemaDef>;
