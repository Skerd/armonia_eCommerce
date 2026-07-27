import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type DeductInventoryFormType = {
    _id: string;
    quantity: number;
    manufacturer?: string;
    receiptNumber?: string;
    receipts?: string[];
    occurredAt?: string;
    unitCost?: number;
    batchLot?: string;
    expiryDate?: string;
    note?: string;
};

export function deductInventoryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        quantity: z.coerce.number().positive(),
        manufacturer: z.string().max(200).optional(),
        receiptNumber: z.string().max(200).optional(),
        receipts: z.array(isObjectIdZod(form?.["receiptsLabel"] ?? "receipts", languageCode)).max(20).optional(),
        occurredAt: z.string().optional(),
        unitCost: z.coerce.number().min(0).optional(),
        batchLot: z.string().max(200).optional(),
        expiryDate: z.string().optional(),
        note: z.string().max(2000).optional(),
    });
}
