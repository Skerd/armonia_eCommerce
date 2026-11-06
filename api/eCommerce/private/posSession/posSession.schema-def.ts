/**
 * The POS session fields the cashier sets: the till, the counted opening and closing cash and notes. Name, currency,
 * state, totals and cash moves are kept by the server (`validateSchemaDefAgainstMongoose` lists the required ones as
 * server-owned).
 */
export const PosSessionSchemaDef = {
    config: {type: "objectId", required: true},
    openingBalance: {type: "number", required: false, min: 0},
    closingBalance: {type: "number", required: false, min: 0},
    notes: {type: "string", required: false},
} as const;
