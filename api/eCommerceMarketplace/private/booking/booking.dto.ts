import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {OrderSimple} from "../../../../dto/order.dto";

/** API / panel type for a Booking (populated refs). */
export type Booking = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: OrderSimple;
    provider?: SimpleUser;
    startAt: Date | string;
    endAt: Date | string;
    timezone: string;
};
