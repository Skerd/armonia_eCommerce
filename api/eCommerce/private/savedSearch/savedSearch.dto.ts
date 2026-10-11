import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {CategorySimple} from "../../../../dto/category.dto";
import type {CollectionSimple} from "../../../../dto/collection.dto";
import type {ShopProductSort} from "../../public/shopCatalog/shopProducts.form.validator";

export type SavedSearch = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    customer?: SimpleBlankUser;
    name: string;
    categoryIds?: CategorySimple[];
    collectionId?: CollectionSimple;
    priceMin?: number;
    priceMax?: number;
    sort?: ShopProductSort;
};
