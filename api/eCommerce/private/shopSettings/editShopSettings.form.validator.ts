import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ShopSettingsSchemaDef} from "./shopSettings.schema-def";

export function editShopSettingsFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ShopSettingsSchemaDef, languageCode, form, permissions, readPermissions);
}
