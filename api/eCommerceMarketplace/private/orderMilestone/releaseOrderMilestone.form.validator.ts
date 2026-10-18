import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ReleaseOrderMilestoneSchemaDef} from "./orderMilestone.schema-def";

export function releaseOrderMilestoneFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ReleaseOrderMilestoneSchemaDef, languageCode, form);
}
