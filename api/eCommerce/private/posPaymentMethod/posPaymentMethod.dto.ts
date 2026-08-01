import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {
    PosPaymentMethodType,
    PosTerminalProtocol,
    PosTerminalProvider,
} from "./posPaymentMethod.schema-def";

export type PosPaymentMethod = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    type: PosPaymentMethodType;
    isActive: boolean;
    sequence: number;
    cashQuickAmounts?: string;
    terminalEnabled?: boolean;
    terminalProvider?: PosTerminalProvider;
    terminalProtocol?: PosTerminalProtocol;
    terminalHost?: string;
    terminalPort?: number;
    terminalId?: string;
    terminalPath?: string;
};

export type TestPosTerminalConnectionResponse = {
    ok: boolean;
    message: string;
    provider: string;
    terminalId?: string;
};
