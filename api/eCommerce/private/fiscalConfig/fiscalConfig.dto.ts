import type {Media} from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {FiscalEnvironment, FiscalTcrType} from "./fiscalConfig.schema-def";

export type FiscalConfig = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    nipt?: string;
    softCode: string;
    maintainerCode?: string;
    businessUnitCode: string;
    operatorCode: string;
    tcrCode?: string;
    tcrIntId?: string;
    tcrType?: FiscalTcrType;
    fiscalizationUrl: string;
    einvoiceUrl: string;
    selfcareUrl: string;
    proxyUrl?: string;
    sellerName?: string;
    sellerAddress?: string;
    sellerTown?: string;
    sellerCountry?: string;
    isVatRegistered: boolean;
    environment: FiscalEnvironment;
    /** Stored PKCS#12 media. Present when the single/read populate includes it. */
    certificate?: Media[];
    /** Whether a certificate password is stored. The plaintext is never returned. */
    certificatePassword: boolean;
    isActive: boolean;
};
