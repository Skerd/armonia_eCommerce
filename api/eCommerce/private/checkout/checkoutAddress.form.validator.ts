import {z} from "zod";
import {isObjectIdZod, notEmptyZod, isStringZod} from "../../../../../core/helpers/zodBuilder";

export type CheckoutAddressType = {
    firstName: string;
    lastName: string;
    phone?: string;
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country?: string;
};

export type CheckoutAddressFormType = {
    checkoutId: string;
    shippingAddress: CheckoutAddressType;
    billingAddress?: CheckoutAddressType;
};

export function checkoutAddressZod(languageCode: string, form: any = null) {
    return z.object({
        firstName: notEmptyZod(form?.["firstNameLabel"] ?? "firstName", languageCode),
        lastName: notEmptyZod(form?.["lastNameLabel"] ?? "lastName", languageCode),
        phone: isStringZod(form?.["phoneLabel"] ?? "phone", languageCode).optional(),
        street: notEmptyZod(form?.["streetLabel"] ?? "street", languageCode),
        city: notEmptyZod(form?.["cityLabel"] ?? "city", languageCode),
        state: isStringZod(form?.["stateLabel"] ?? "state", languageCode).optional(),
        postalCode: isStringZod(form?.["postalCodeLabel"] ?? "postalCode", languageCode).optional(),
        country: isObjectIdZod(form?.["countryLabel"] ?? "country", languageCode).optional(),
    });
}

export function checkoutAddressFormSchema(languageCode: string, form: any = null) {
    return z.object({
        checkoutId: isObjectIdZod(form?.["checkoutIdLabel"] ?? "checkoutId", languageCode),
        shippingAddress: checkoutAddressZod(languageCode, form),
        billingAddress: checkoutAddressZod(languageCode, form).optional(),
    });
}
