import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {CustomerGroupSimple} from "../../../../dto/customerGroup.dto";

export type CustomerGroupMember = DeletedData &
    OwnershipData &
    LifeCycleData & {
    _id: string;
    user: SimpleUser;
    customerGroup: CustomerGroupSimple;
};
