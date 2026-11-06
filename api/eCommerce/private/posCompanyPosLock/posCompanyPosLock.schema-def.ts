export const POS_PAUSE_REASON_MAX = 500;

/**
 * A company's till kill switch, set by the till config's pauseAll / resumeAll actions.
 * The def exists so the Mongoose schema cannot drift from the wire contract.
 */
export const PosCompanyPosLockSchemaDef = {
    pausedAt: {type: "date", required: false},
    pausedBy: {type: "objectId", required: false},
    pauseReason: {type: "string", required: false, max: POS_PAUSE_REASON_MAX},
} as const;
