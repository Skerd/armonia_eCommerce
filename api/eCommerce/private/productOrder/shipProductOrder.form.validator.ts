import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

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
        carrier: z.string().max(200).optional(),
        trackingNumber: z.string().max(200).optional(),
        trackingUrl: z.string().max(2000).optional(),
        notes: z.string().max(2000).optional(),
    });
}
