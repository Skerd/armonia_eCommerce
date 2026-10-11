import {registerRefSelects, type RefSelectConfig} from "../../../core/database/filter/refSelectRegistry";

export const ECOMMERCE_REF_SELECTS: Record<string, RefSelectConfig> = {
    ProductCategory: {apiUrl: "/api/eCommerce/category/select"},
};

export function registerECommerceRefSelects(): void {
    registerRefSelects(ECOMMERCE_REF_SELECTS);
}

/** Side-effect: Maestro `addModelData` snapshots table configs at model import. */
registerECommerceRefSelects();
