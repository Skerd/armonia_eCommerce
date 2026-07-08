import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const CustomerGroupMemberSchemaDef = {
    user: {type: "objectId", required: true},
    customerGroup: {type: "objectId", required: true},
} as const;

export type CreateCustomerGroupMemberFormType = InferCreateForm<typeof CustomerGroupMemberSchemaDef>;
export type EditCustomerGroupMemberFormType = InferEditForm<typeof CustomerGroupMemberSchemaDef> & {_id: string};
