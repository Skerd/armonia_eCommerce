import type {DeletedData, OwnershipData, LifeCycleData} from "../../../../../core/types/shared.types";
import type {PromotionLifecycleStatus, PromotionType} from "./promotion.schema-def";

export type Promotion = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    listing?: {
        _id: string;
        name?: string;
        title?: string;
        status?: string
    };
    type: PromotionType;
    lifecycleStatus?: PromotionLifecycleStatus;
    stopReason?: string;
    startAt: Date | string;
    endAt: Date | string;
};
