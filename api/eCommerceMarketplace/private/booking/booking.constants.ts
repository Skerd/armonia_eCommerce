/** The bookings list's "When" quick filter: still to come (or under way), on the company's today, or over. */
export const BOOKING_WHEN = ["upcoming", "today", "past"] as const;
export type BookingWhen = (typeof BOOKING_WHEN)[number];
