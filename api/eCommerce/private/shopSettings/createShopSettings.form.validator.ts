import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ShopSettingsSchemaDef} from "./shopSettings.schema-def";

export function createShopSettingsFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ShopSettingsSchemaDef, languageCode, form);
}
