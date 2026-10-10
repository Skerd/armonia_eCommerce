import type {WarehouseSimple} from "./warehouse.dto";

export type InventorySimple = {
    _id: string;
    quantityOnHand: number;
    quantityReserved: number;
    warehouse?: WarehouseSimple;
};
