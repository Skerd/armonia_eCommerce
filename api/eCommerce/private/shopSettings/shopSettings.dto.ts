import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CategorySimple} from "../../../../dto/category.dto";

/** A shop's eCommerce settings (P26.8): the top-level platform categories it sells in. */
export type ShopSettings = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    branches: CategorySimple[];
};
