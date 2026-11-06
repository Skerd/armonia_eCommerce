/**
 * Members are added and removed through the customer group routes (`customerGroupMember.form.validator.ts`).
 * The def exists so the Mongoose schema cannot drift from the wire contract.
 */
export const CustomerGroupMemberSchemaDef = {
    user: {type: "objectId", required: true},
    customerGroup: {type: "objectId", required: true},
} as const;
