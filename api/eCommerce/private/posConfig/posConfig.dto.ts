import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type PosConfig = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    paymentMethods?: string[];
    paymentMethodLabels?: {
        _id: string;
        name: string;
        type?: string;
        cashQuickAmounts?: string;
        terminalEnabled?: boolean;
        terminalProvider?: string;
        terminalHost?: string;
        terminalPort?: number;
        terminalId?: string;
        terminalPath?: string;
    }[];
    warehouse: string;
    warehouseLabel?: {_id: string; name: string};
    currency?: string;
    currencyLabel?: {_id: string; name: string; symbol?: string; abbreviation?: string};
    receiptHeader?: string;
    receiptFooter?: string;
    ifaceBarcodeScanner: boolean;
    ifaceCashControl: boolean;
    allowDiscount: boolean;
    allowQuantityChange: boolean;
    allowOversell?: boolean;
    pinForDiscount?: boolean;
    pinForCashOut?: boolean;
    pinForRefund?: boolean;
    /** True when a manager PIN is configured (hash never exposed). */
    hasManagerPin?: boolean;
    isActive: boolean;
    company?: {_id: string; name: string};
    createdAt?: string;
};
