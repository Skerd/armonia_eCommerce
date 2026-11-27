import type {DeletedData, LifeCycleData, OwnershipData, RequestableData} from "../../../../../core/types/shared.types";
import type {CategorySimple} from "../../../../dto/category.dto";

/** A platform product category (D195): `name` is in the reader's language, `names` holds every language. */
export type Category = OwnershipData & DeletedData & LifeCycleData & RequestableData & {
    _id: string;
    name: string;
    names?: {en?: string; sq?: string; de?: string; fr?: string; it?: string};
    slug: string;
    parent?: CategorySimple;
    order: number;
};
