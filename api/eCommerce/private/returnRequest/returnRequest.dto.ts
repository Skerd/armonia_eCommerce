import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProductOrderSimple} from "../../../../dto/productOrder.dto";

export type ReturnRequest = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    order: ProductOrderSimple;
    type: string;
    status: string;
    items: {orderItemId: string; quantity: number; reason: string}[];
    refundAmount?: number;
    customerNote?: string;
    adminNote?: string;
    resolvedBy?: SimpleBlankUser;
    resolvedAt?: string;
};
