import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";
import type {PosPaymentMethodType, PosTerminalProvider} from "./posPaymentMethod.schema-def";

export type PosPaymentMethod = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    type: PosPaymentMethodType;
    isActive: boolean;
    sequence: number;
    cashQuickAmounts?: string;
    terminalEnabled?: boolean;
    terminalProvider?: PosTerminalProvider;
    terminalHost?: string;
    terminalPort?: number;
    terminalId?: string;
    terminalPath?: string;
    company?: {_id: string; name: string};
    createdAt?: string;
};
