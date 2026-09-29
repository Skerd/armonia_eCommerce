import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";

export type CustomerGroup = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    description?: string;
    memberCount: number;
    isDefault: boolean;
    members?: SimpleUser[];
};
