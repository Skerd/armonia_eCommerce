import {registerRefSelects, type RefSelectConfig} from "../../../core/database/filter/refSelectRegistry";

/**
 * Mongoose `ref` name → select endpoint. `schemaToTableConfig` copies `apiUrl`
 * onto objectId filters, and the filter builder renders those as ApiSelect.
 * Keys must match `model("Name")`. User, Currency, Country, State, and City
 * stay in the core registry. Media stays an existence check, not a picker.
 * Gift cards are issued by finance; ecommerce depends on that module.
 */
export const ECOMMERCE_REF_SELECTS: Record<string, RefSelectConfig> = {
    CmsBlock: {apiUrl: "/api/eCommerce/cmsBlock/select"},
    CustomerAddress: {apiUrl: "/api/eCommerce/customerAddress/select"},
    CustomerGroup: {apiUrl: "/api/eCommerce/customerGroup/select"},
    Discount: {apiUrl: "/api/eCommerce/discount/select"},
    FiscalConfig: {apiUrl: "/api/eCommerce/fiscalConfig/select"},
    Fulfillment: {apiUrl: "/api/eCommerce/fulfillment/select"},
    GiftCard: {apiUrl: "/api/finance/giftCard/select"},
    Inventory: {apiUrl: "/api/eCommerce/inventory/select"},
    InventoryMovement: {apiUrl: "/api/eCommerce/inventoryMovement/select"},
    PosConfig: {apiUrl: "/api/eCommerce/posConfig/select"},
    PosOrder: {apiUrl: "/api/eCommerce/posOrder/select"},
    PosPaymentMethod: {apiUrl: "/api/eCommerce/posPaymentMethod/select"},
    PosSession: {apiUrl: "/api/eCommerce/posSession/select"},
    PricingRule: {apiUrl: "/api/eCommerce/pricingRule/select"},
    Product: {apiUrl: "/api/eCommerce/product/select"},
    ProductAttribute: {apiUrl: "/api/eCommerce/productAttribute/select"},
    ProductCategory: {apiUrl: "/api/eCommerce/category/select"},
    ProductCollection: {apiUrl: "/api/eCommerce/collection/select"},
    ProductOrder: {apiUrl: "/api/eCommerce/productOrder/select"},
    ProductReview: {apiUrl: "/api/eCommerce/productReview/select"},
    ProductVariant: {apiUrl: "/api/eCommerce/productVariant/select"},
    ReturnRequest: {apiUrl: "/api/eCommerce/returnRequest/select"},
    SavedSearch: {apiUrl: "/api/eCommerce/savedSearch/select"},
    ShippingZone: {apiUrl: "/api/eCommerce/shippingZone/select"},
    StockCount: {apiUrl: "/api/eCommerce/stockCount/select"},
    StockTransfer: {apiUrl: "/api/eCommerce/stockTransfer/select"},
    TaxZone: {apiUrl: "/api/eCommerce/taxZone/select"},
    Warehouse: {apiUrl: "/api/eCommerce/warehouse/select"},
};

export function registerECommerceRefSelects(): void {
    registerRefSelects(ECOMMERCE_REF_SELECTS);
}

/** Side-effect: Maestro `addModelData` snapshots table configs at model import. */
registerECommerceRefSelects();
