import { z } from "zod";

export function releaseOrderMilestoneFormSchema(languageCode: string, form: any = null) {
    return z.object({
        milestoneId: z.string().min(1),
    });
}
