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
    autoFiscalizePos: boolean;
    autoEinvoice: boolean;
    environment: FiscalEnvironment;
    /** True when a PKCS#12 certificate is stored (blob never exposed). */
    hasCertificate: boolean;
    isActive: boolean;
};
