import { z } from "zod";

export function escrowSummaryFormSchema(languageCode: string) {
    return z.object({
        startDate: z.string().optional(),
        endDate: z.string().optional(),
    });
}
