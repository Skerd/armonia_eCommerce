export const ECommerceWebSocketMessageCodes = {
    POS_CONFIG_PAUSED: "POS_CONFIG_PAUSED",
    POS_SESSION_FORCE_CLOSED: "POS_SESSION_FORCE_CLOSED",
} as const;

export type ECommerceWebSocketMessageCode =
    (typeof ECommerceWebSocketMessageCodes)[keyof typeof ECommerceWebSocketMessageCodes];

/** FE uses the same codes (no separate mirror needed). */
export const ECommerceWebSocketFEMessageCodes = ECommerceWebSocketMessageCodes;
