import {z} from "zod";
import {isObjectIdZod, mustBeZod} from "../../../../../core/helpers/zodBuilder";
import {
    INVENTORY_MOVEMENT_NOTE_MAX,
    inventoryMovementReasons,
} from "../inventoryMovement/inventoryMovement.schema-def";

export {inventoryMovementReasons};

export type AdjustInventoryFormType = {
    inventoryId: string;
    delta: number;
    reason?: (typeof inventoryMovementReasons)[number];
    notes?: string;
};

export function adjustInventoryFormSchema(languageCode: string, form: any = null) {
    return z.object({
        inventoryId: isObjectIdZod(form?.["inventoryIdLabel"] ?? "inventoryId", languageCode),
        delta: z.coerce.number().refine((value) => Number.isFinite(value) && value !== 0),
        reason: mustBeZod(form?.["reasonLabel"] ?? "reason", [...inventoryMovementReasons], languageCode).optional(),
        notes: z.string().max(INVENTORY_MOVEMENT_NOTE_MAX).optional(),
    });
}
