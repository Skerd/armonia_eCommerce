export const odooImportDatasets = [
    "categories",
    "products",
    "warehouses",
    "inventory",
    "stockChanges",
    "actions",
    "users",
] as const;

export type OdooImportDataset = (typeof odooImportDatasets)[number];

export type OdooImportFormType = {
    categories?: boolean;
    products?: boolean;
    warehouses?: boolean;
    inventory?: boolean;
    stockChanges?: boolean;
    actions?: boolean;
    users?: boolean;
    dryRun?: boolean;
};
