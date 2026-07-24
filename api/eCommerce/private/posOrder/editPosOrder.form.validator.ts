import {z} from "zod";

export function editPosOrderFormSchema(_languageCode: string, _form: any = null) {
    return z.object({_id: z.string()});
}
