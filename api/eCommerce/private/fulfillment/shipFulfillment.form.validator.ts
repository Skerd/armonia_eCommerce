import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

export type ShipFulfillmentFormType = {
    _id: string;
    carrier?: string;
    trackingNumber?: string;
    trackingUrl?: string;
    notes?: string;
};

export function shipFulfillmentFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        carrier: stringMaxLengthZod(form?.["carrierLabel"] ?? "carrier", 200, languageCode).optional(),
        trackingNumber: stringMaxLengthZod(form?.["trackingNumberLabel"] ?? "trackingNumber", 200, languageCode).optional(),
        trackingUrl: stringMaxLengthZod(form?.["trackingUrlLabel"] ?? "trackingUrl", 2000, languageCode).optional(),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", 2000, languageCode).optional(),
    });
}
