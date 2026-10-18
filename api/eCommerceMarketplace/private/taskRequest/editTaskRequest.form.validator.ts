import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {refineNumericStrictlyGreaterThanField} from "../../../../../core/helpers/zodBuilder";
import {TaskRequestSchemaDef} from "./taskRequest.schema-def";

export function editTaskRequestFormSchema(
    languageCode: string,
    form: any = null,
    permissions: Record<string, unknown> = {},
    readPermissions: Record<string, unknown> = {},
) {
    return buildEditZodSchema(TaskRequestSchemaDef, languageCode, form, permissions, readPermissions).superRefine(
        refineNumericStrictlyGreaterThanField({
            greaterKey: "budgetMax",
            thanKey: "budgetMin",
            greaterDisplayLabel: form?.["budgetMaxLabel"] ?? "budgetMax",
            thanDisplayLabel: form?.["budgetMinLabel"] ?? "budgetMin",
            languageCode,
        }),
    );
}
