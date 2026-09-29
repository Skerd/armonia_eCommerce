import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {PosConfigSimple} from "../../../../dto/posConfig.dto";

export type PosSessionState = "opening_control" | "opened" | "closing_control" | "closed";
export type PosCashMoveType = "in" | "out";

export type PosCashMove = {
    type: PosCashMoveType;
    amount: number;
    reason?: string;
    at: string;
    by?: SimpleBlankUser;
};

export type PosSession = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    config: PosConfigSimple;
    state: PosSessionState;
    openedBy?: SimpleBlankUser;
    closedBy?: SimpleBlankUser;
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
};
