import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {
    FULFILLMENT_CARRIER_MAX,
    FULFILLMENT_NOTES_MAX,
    FULFILLMENT_TRACKING_NUMBER_MAX,
    FULFILLMENT_TRACKING_URL_MAX,
} from "../fulfillment/fulfillment.schema-def";

export type ShipProductOrderFormType = {
    _id: string;
    carrier?: string;
    trackingNumber?: string;
    trackingUrl?: string;
    notes?: string;
};

export function shipProductOrderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        carrier: stringMaxLengthZod(form?.["carrierLabel"] ?? "carrier", FULFILLMENT_CARRIER_MAX, languageCode).optional(),
        trackingNumber: stringMaxLengthZod(form?.["trackingNumberLabel"] ?? "trackingNumber", FULFILLMENT_TRACKING_NUMBER_MAX, languageCode).optional(),
        trackingUrl: stringMaxLengthZod(form?.["trackingUrlLabel"] ?? "trackingUrl", FULFILLMENT_TRACKING_URL_MAX, languageCode).optional(),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", FULFILLMENT_NOTES_MAX, languageCode).optional(),
    });
}
