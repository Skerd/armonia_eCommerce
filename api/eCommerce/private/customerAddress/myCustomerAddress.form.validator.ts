import {z} from "zod";
import {
    isBooleanZod,
    isEmailZod,
    isNumberZod,
    isObjectIdZod,
    mustBeZod,
    notEmptyZod,
} from "../../../../../core/helpers/zodBuilder";
import {customerAddressTypes} from "./customerAddress.schema-def";

export type MyCustomerAddressCreateFormType = {
    type?: (typeof customerAddressTypes)[number];
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country: string;
    latitude?: number;
    longitude?: number;
    label?: string;
    isDefault?: boolean;
};

export type MyCustomerAddressEditFormType = MyCustomerAddressCreateFormType & {_id: string};

export function myCustomerAddressCreateFormSchema(languageCode: string, form: any = null) {
    const lc = languageCode ?? "";
    return z.object({
        type: mustBeZod(form?.["typeLabel"] ?? "type", [...customerAddressTypes], lc).optional(),
        firstName: notEmptyZod(form?.["firstNameLabel"] ?? "firstName", lc),
        lastName: notEmptyZod(form?.["lastNameLabel"] ?? "lastName", lc),
        email: isEmailZod(form?.["emailLabel"] ?? "email", lc).optional(),
        phone: z.string().optional(),
        street: notEmptyZod(form?.["streetLabel"] ?? "street", lc),
        city: isObjectIdZod(form?.["cityLabel"] ?? "city", lc),
        state: isObjectIdZod(form?.["stateLabel"] ?? "state", lc).optional(),
        postalCode: z.string().optional(),
        country: isObjectIdZod(form?.["countryLabel"] ?? "country", lc),
        latitude: isNumberZod(form?.["latitudeLabel"] ?? "latitude", lc).optional(),
        longitude: isNumberZod(form?.["longitudeLabel"] ?? "longitude", lc).optional(),
        label: z.string().optional(),
        isDefault: isBooleanZod(form?.["isDefaultLabel"] ?? "isDefault", lc).optional(),
    });
}

export function myCustomerAddressEditFormSchema(languageCode: string, form: any = null) {
    return myCustomerAddressCreateFormSchema(languageCode, form).extend({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode ?? ""),
    });
}
