import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type ShopCitiesFormType = {
    countryId: string;
};

export function shopCitiesFormSchema(languageCode: string, form: any = null) {
    return z.object({
        countryId: isObjectIdZod(form?.["countryIdLabel"] ?? "countryId", languageCode),
    });
}
