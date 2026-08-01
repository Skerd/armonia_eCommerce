import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

export type FulfillmentStatusNotesFormType = {
    _id: string;
    notes?: string;
};

export function fulfillmentStatusNotesFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", 2000, languageCode).optional(),
    });
}
