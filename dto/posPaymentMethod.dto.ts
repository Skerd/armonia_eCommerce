export type PosPaymentMethodSimple = {
    _id: string;
    name: string;
    type: string;
    isActive: boolean;
    sequence: number;
    cashQuickAmounts?: number[];
    terminalEnabled?: boolean;
    terminalProvider?: string;
    terminalProtocol?: string;
    terminalHost?: string;
    terminalPort?: number;
    terminalId?: string;
    terminalPath?: string;
};
