import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {WarehouseSimple} from "../../../../dto/warehouse.dto";

export type PosConfigManager = {
    _id: string;
    name?: string;
    surname?: string;
    /** Fallback display when name/surname are empty. */
    username?: string;
    /** True when this manager has a PIN configured (hash never exposed). */
    hasPin: boolean;
};

export type PosConfigPaymentMethod = {
    _id: string;
    name: string;
    type?: string;
    isActive?: boolean;
    cashQuickAmounts?: string;
    terminalEnabled?: boolean;
    terminalProvider?: string;
    terminalProtocol?: string;
    terminalHost?: string;
    terminalPort?: number;
    terminalId?: string;
    terminalPath?: string;
};

export type PosConfig = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    paymentMethods?: PosConfigPaymentMethod[];
    managers?: PosConfigManager[];
    warehouses: WarehouseSimple[];
    currency?: CurrencySimple;
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
    /** True when at least one manager has a PIN (for till pinFor* gating). */
    hasManagerPin?: boolean;
    /** True when the requesting user is assigned as a manager on this till. */
    currentUserIsManager?: boolean;
    /** True when the requesting user has their own PIN set on this till. */
    currentUserHasManagerPin?: boolean;
    isActive: boolean;
    /** True when this config is paused or the company-wide POS lock is active. */
    isPaused?: boolean;
    /** True when the company-wide POS lock is active (distinct from a single-till pause). */
    isCompanyPaused?: boolean;
    /** Reason from the company lock when `isCompanyPaused` is true. */
    companyPauseReason?: string | null;
    pausedAt?: string | null;
    pausedBy?: SimpleBlankUser | null;
    /** This till's own pause reason (not the company lock reason). */
    pauseReason?: string | null;
};
