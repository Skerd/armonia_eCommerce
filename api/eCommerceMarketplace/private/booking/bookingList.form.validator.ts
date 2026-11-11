import {z} from "zod";
import {isEnumZod} from "../../../../../core/helpers/zodBuilder";
import {withTableFormValidator} from "../../../../../core/utilities/zod/shared.validator";
import {BOOKING_WHEN} from "./booking.constants";

/** The bookings list: the table params plus the "When" quick filter. */
export function bookingListFormSchema(languageCode: string, form: any = null) {
    return withTableFormValidator(languageCode, form, {
        when: isEnumZod(form?.["whenLabel"] ?? "when", BOOKING_WHEN, BOOKING_WHEN.join(", "), languageCode).optional(),
    });
}

export type BookingListFormType = z.infer<ReturnType<typeof bookingListFormSchema>>;
