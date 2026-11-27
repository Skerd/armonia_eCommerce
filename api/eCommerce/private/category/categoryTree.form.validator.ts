import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {CATEGORY_NAME_MAX} from "./category.schema-def";

/** One level of the category tree (a parent's children, the top level without one), or a search across it. */
export function categoryTreeFormSchema(languageCode: string, form: any = null) {
    return z.object({
        parent: isObjectIdZod(form?.["parentLabel"] ?? "parent", languageCode).optional(),
        search: stringMaxLengthZod(form?.["searchLabel"] ?? "search", CATEGORY_NAME_MAX, languageCode).optional(),
    });
}
