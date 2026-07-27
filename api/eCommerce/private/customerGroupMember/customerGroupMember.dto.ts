import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type CustomerGroupMemberUser = {
    _id: string;
    name: string;
    surname: string;
    photo?: string;
};

export type CustomerGroupMember = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    user: CustomerGroupMemberUser;
    customerGroup: {_id: string; name: string};
};
