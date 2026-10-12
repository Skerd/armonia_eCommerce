import {z} from "zod";
import {isArrayOfObjectIdsZod, isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {
    INVENTORY_MOVEMENT_NOTE_MAX,
    INVENTORY_MOVEMENT_RECEIPT_MAX,
    INVENTORY_MOVEMENT_TEXT_MAX,
} from "../inventoryMovement/inventoryMovement.schema-def";

/** Why stock is taken out by hand; recorded as the movement's reason. */
export const inventoryDeductReasons = ["write_off", "damage", "adjustment"] as const;

export type DeductInventoryFormType = {
    _id: string;
    quantity: number;
    reason?: (typeof inventoryDeductReasons)[number];
    receipts?: string[];
    batchLot?: string;
    note?: string;
};

export function deductInventoryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        quantity: z.coerce.number().positive(),
        reason: z.enum(inventoryDeductReasons).optional(),
        receipts: isArrayOfObjectIdsZod(form?.["receiptsLabel"] ?? "receipts", languageCode, {max: INVENTORY_MOVEMENT_RECEIPT_MAX}).optional(),
        batchLot: stringMaxLengthZod(form?.["batchLotLabel"] ?? "batchLot", INVENTORY_MOVEMENT_TEXT_MAX, languageCode).optional(),
        note: stringMaxLengthZod(form?.["noteLabel"] ?? "note", INVENTORY_MOVEMENT_NOTE_MAX, languageCode).optional(),
    });
}
