import {z} from "zod";
import {isBooleanZod} from "../../../../../core/helpers/zodBuilder";
import {odooImportDatasets} from "./odooImport.form.type";

export function odooImportFormSchema(languageCode: string, form: any = null) {
    const fields = Object.fromEntries(
        odooImportDatasets.map((dataset) => [
            dataset,
            isBooleanZod(form?.[`${dataset}Label`] ?? dataset, languageCode).optional(),
        ]),
    );
    return z.object({
        ...fields,
        dryRun: isBooleanZod(form?.["dryRunLabel"] ?? "dryRun", languageCode).optional(),
    });
}
