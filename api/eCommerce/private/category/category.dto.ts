import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CategorySimple} from "../../../../dto/category.dto";

export type Category = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    parent?: CategorySimple;
    order: number;
};
