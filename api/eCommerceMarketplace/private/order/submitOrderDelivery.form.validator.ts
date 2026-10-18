import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {SubmitOrderDeliverySchemaDef} from "./order.schema-def";

export type {SubmitOrderDeliveryFormType} from "./order.schema-def";

export function submitOrderDeliveryFormSchema(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend(
        buildCreateZodSchema(SubmitOrderDeliverySchemaDef, languageCode, form).shape,
    );
}
