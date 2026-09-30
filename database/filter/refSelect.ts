import {registerRefSelects, type RefSelectConfig} from "../../../core/database/filter/refSelectRegistry";

export const ECOMMERCE_REF_SELECTS = {
    ProductCategory: {apiUrl: "/api/eCommerce/category/select"},
    ListingCategory: {apiUrl: "/api/eCommerce/category/select"},
} as const satisfies Record<string, RefSelectConfig>;

export function registerECommerceRefSelects(): void {
    registerRefSelects(ECOMMERCE_REF_SELECTS);
}

/** Side-effect: Maestro `addModelData` snapshots table configs at model import. */
registerECommerceRefSelects();
