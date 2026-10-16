import type {OdooImportDataset} from "./odooImport.form.type";

export type OdooImportCounts = {
    created: number;
    updated: number;
    skipped: number;
};

export type OdooImportResponse = {
    dryRun: boolean;
} & Partial<Record<OdooImportDataset, OdooImportCounts>>;
