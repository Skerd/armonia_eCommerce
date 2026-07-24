import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type PosSessionState = "opening_control" | "opened" | "closing_control" | "closed";
export type PosCashMoveType = "in" | "out";

export type PosCashMove = {
    type: PosCashMoveType;
    amount: number;
    reason?: string;
    at: string;
    by?: {_id: string; name?: string; surname?: string};
};

export type PosSession = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    config: string;
    configLabel?: {_id: string; name: string};
    state: PosSessionState;
    openedBy?: {_id: string; name?: string; surname?: string};
    closedBy?: {_id: string; name?: string; surname?: string};
    openedAt?: string;
    closedAt?: string;
    openingBalance: number;
    closingBalance?: number;
    expectedCash: number;
    cashRegisterBalance: number;
    cashMoves: PosCashMove[];
    orderCount: number;
    totalSales: number;
    totalCash: number;
    totalCard: number;
    notes?: string;
    company?: {_id: string; name: string};
    createdAt?: string;
};
