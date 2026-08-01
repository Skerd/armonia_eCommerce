import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CustomerGroupMemberUser} from "../customerGroupMember/customerGroupMember.dto";

export type CustomerGroup = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    description?: string;
    memberCount: number;
    isDefault: boolean;
    members?: CustomerGroupMemberUser[];
};
