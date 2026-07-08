import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type CustomerGroupMemberUser = {
    _id: string;
    name: string;
    surname: string;
    email?: string;
};

export type CustomerGroupMember = DeletedData &
    OwnershipData & {
    _id: string;
    user: CustomerGroupMemberUser;
    customerGroup: {_id: string; name: string};
    createdAt?: string;
};
