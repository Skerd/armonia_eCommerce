import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CustomerGroupMemberUser} from "../customerGroupMember/customerGroupMember.dto";

export type CustomerGroup = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    description?: string;
    memberCount: number;
    isDefault: boolean;
    members?: CustomerGroupMemberUser[];
    company?: {_id: string; name: string};
    createdAt?: string;
};
