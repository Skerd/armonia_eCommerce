import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

const REORDER_MAX_BLOCKS = 1000;

export function reorderCmsBlocksFormSchema(languageCode: string, form: any = null) {
    return z.object({
        orderedIds: z.array(isObjectIdZod(form?.["orderedIdsLabel"] ?? "orderedIds", languageCode))
            .min(1)
            .max(REORDER_MAX_BLOCKS)
            .refine((ids) => new Set(ids).size === ids.length),
    });
}
