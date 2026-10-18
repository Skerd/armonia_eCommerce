import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {OrderSimple} from "../../../../dto/order.dto";
import type {OrderDeliverySimple} from "../../../../dto/orderDelivery.dto";
import type {OrderRevisionStatus} from "./orderRevision.schema-def";

export type OrderRevision = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: OrderSimple;
    delivery?: OrderDeliverySimple;
    requestedBy?: SimpleUser;
    reason: string;
    status: OrderRevisionStatus;
};
