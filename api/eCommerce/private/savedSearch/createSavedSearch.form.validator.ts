import { z } from "zod";

export function createSavedSearchFormSchema(languageCode: string) {
    return z.object({
        name: z.string().min(1, "name_required").max(100, "name_max_length"),
        filters: z.object({
            title: z.string().optional(),
            categoryId: z.string().optional(),
            location: z.string().optional(),
            tags: z.array(z.string()).optional(),
            geoLat: z.number().optional(),
            geoLng: z.number().optional(),
            geoMaxKm: z.number().optional(),
        }).optional().default({}),
    });
}
