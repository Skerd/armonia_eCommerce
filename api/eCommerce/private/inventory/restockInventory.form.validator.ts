import {z} from "zod";
import {isArrayOfObjectIdsZod, isObjectIdZod, stringMaxLengthZod, isStringZod, positiveNumberZod, greaterThanOrEqualZod} from "../../../../../core/helpers/zodBuilder";
import {
    INVENTORY_MOVEMENT_NOTE_MAX,
    INVENTORY_MOVEMENT_RECEIPT_MAX,
    INVENTORY_MOVEMENT_TEXT_MAX,
} from "../inventoryMovement/inventoryMovement.schema-def";

export type RestockInventoryFormType = {
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

export function restockInventoryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        quantity: positiveNumberZod(form?.["quantityLabel"] ?? "quantity", languageCode),
        manufacturer: stringMaxLengthZod(form?.["manufacturerLabel"] ?? "manufacturer", INVENTORY_MOVEMENT_TEXT_MAX, languageCode).optional(),
        receiptNumber: stringMaxLengthZod(form?.["receiptNumberLabel"] ?? "receiptNumber", INVENTORY_MOVEMENT_TEXT_MAX, languageCode).optional(),
        receipts: isArrayOfObjectIdsZod(form?.["receiptsLabel"] ?? "receipts", languageCode, {max: INVENTORY_MOVEMENT_RECEIPT_MAX}).optional(),
        occurredAt: isStringZod(form?.["occurredAtLabel"] ?? "occurredAt", languageCode).optional(),
        unitCost: greaterThanOrEqualZod(form?.["unitCostLabel"] ?? "unitCost", 0, languageCode).optional(),
        batchLot: stringMaxLengthZod(form?.["batchLotLabel"] ?? "batchLot", INVENTORY_MOVEMENT_TEXT_MAX, languageCode).optional(),
        expiryDate: isStringZod(form?.["expiryDateLabel"] ?? "expiryDate", languageCode).optional(),
        note: stringMaxLengthZod(form?.["noteLabel"] ?? "note", INVENTORY_MOVEMENT_NOTE_MAX, languageCode).optional(),
    });
}
