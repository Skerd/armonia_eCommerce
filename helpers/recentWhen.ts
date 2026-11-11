/**
 * The "When" quick filter of lists that only look back (POS sessions, stock movements): today, this week
 * (Monday on, company time zone), or before this week. Not a stored field; the list route turns it into a range.
 */
export const RECENT_WHEN = ["today", "thisWeek", "older"] as const;
export type RecentWhen = (typeof RECENT_WHEN)[number];
