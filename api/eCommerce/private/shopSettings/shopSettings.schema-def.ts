import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** How many top-level branches a shop may pick under What we sell (P26.8); the taxonomy has 24. */
export const SHOP_SETTINGS_BRANCHES_MAX = 30;

/**
 * A shop's own eCommerce settings, one record per company (P26.8, D195). `branches`: the top-level platform categories
 * the shop sells in ("What we sell"); its product picker offers only those branches, every category when empty.
 */
export const ShopSettingsSchemaDef = {
    branches: {type: "objectIdArray", required: false, maxItems: SHOP_SETTINGS_BRANCHES_MAX},
} as const;

export type CreateShopSettingsFormType = InferCreateForm<typeof ShopSettingsSchemaDef>;
export type EditShopSettingsFormType = InferEditForm<typeof ShopSettingsSchemaDef>;
