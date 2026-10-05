import {z} from "zod";
import {
    inBetweenRangeZod,
    isObjectIdZod,
    stringMinMaxLengthZod,
} from "../../../../../core/helpers/zodBuilder";
import {SHIPPING_ZONE_POSTAL_CODE_PATTERN_MAX} from "./shippingZone.schema-def";

/** Staff / checkout-preview quote input for company shipping zones. */
export type CalculateShippingFormType = {
    subtotal?: number;
    totalWeight?: number;
    itemCount?: number;
    destinationCountry?: string;
    destinationState?: string;
    destinationPostalCode?: string;
};

export function calculateShippingFormSchema(languageCode: string, form: any = null) {
    return z.object({
        subtotal: inBetweenRangeZod(
            form?.["subtotalLabel"] ?? "subtotal",
            0,
            Number.MAX_SAFE_INTEGER,
            languageCode,
        ).optional(),
        totalWeight: inBetweenRangeZod(
            form?.["totalWeightLabel"] ?? "totalWeight",
            0,
            Number.MAX_SAFE_INTEGER,
            languageCode,
        ).optional(),
        itemCount: inBetweenRangeZod(
            form?.["itemCountLabel"] ?? "itemCount",
            0,
            Number.MAX_SAFE_INTEGER,
            languageCode,
        ).optional(),
        destinationCountry: isObjectIdZod(
            form?.["destinationCountryLabel"] ?? "destinationCountry",
            languageCode,
        ).optional(),
        destinationState: isObjectIdZod(
            form?.["destinationStateLabel"] ?? "destinationState",
            languageCode,
        ).optional(),
        destinationPostalCode: stringMinMaxLengthZod(
            form?.["destinationPostalCodeLabel"] ?? "destinationPostalCode",
            1,
            SHIPPING_ZONE_POSTAL_CODE_PATTERN_MAX,
            languageCode,
        ).optional(),
    });
}
