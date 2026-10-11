import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {FULFILLMENT_NOTES_MAX} from "./fulfillment.schema-def";

export type FulfillmentStatusNotesFormType = {
    _id: string;
    notes?: string;
};

export function fulfillmentStatusNotesFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", FULFILLMENT_NOTES_MAX, languageCode).optional(),
    });
}
