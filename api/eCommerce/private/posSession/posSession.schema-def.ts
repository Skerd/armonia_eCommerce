import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Sessions are opened via create form (config + opening balance); lifecycle transitions
// happen through till actions (open/close/cash-move), not standard form edits.
export const PosSessionSchemaDef = {
    config: {type: "objectId", required: true},
    openingBalance: {type: "number", required: true, min: 0},
    notes: {type: "string", required: false},
} as const;

export type CreatePosSessionFormType = InferCreateForm<typeof PosSessionSchemaDef>;
export type EditPosSessionFormType = InferEditForm<typeof PosSessionSchemaDef>;
