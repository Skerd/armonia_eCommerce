import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {refineNumericStrictlyGreaterThanField} from "../../../../../core/helpers/zodBuilder";
import {TaskRequestSchemaDef} from "./taskRequest.schema-def";

export function createTaskRequestFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(TaskRequestSchemaDef, languageCode, form).superRefine(
        refineNumericStrictlyGreaterThanField({
            greaterKey: "budgetMax",
            thanKey: "budgetMin",
            greaterDisplayLabel: form?.["budgetMaxLabel"] ?? "budgetMax",
            thanDisplayLabel: form?.["budgetMinLabel"] ?? "budgetMin",
            languageCode,
        }),
    );
}
