export type OdooConnection = {
    _id: string;
    url: string;
    database: string;
    username: string;
    hasApiKey: boolean;
};

export type OdooConnectionTestResponse = {
    ok: boolean;
};
