import {z} from "zod";

export const analyticsPeriods = ["7d", "30d", "90d", "1y"] as const;
export type AnalyticsPeriod = (typeof analyticsPeriods)[number];

export const analyticsPeriodZod = z.enum(analyticsPeriods);
