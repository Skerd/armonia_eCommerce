import type {Media} from "../../../../../core/types";
import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {OrderSimple} from "../../../../dto/order.dto";
import type {OrderDeliveryStatus} from "./orderDelivery.schema-def";

export type OrderDelivery = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    order?: OrderSimple;
    message?: string;
    attachments: Media[];
    status: OrderDeliveryStatus;
};
