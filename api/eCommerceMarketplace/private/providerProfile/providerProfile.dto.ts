import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {WeeklyHoursSlot} from "../../../../../core/helpers/weeklyHours.schema-def";

export type ProviderAvailabilitySlot = WeeklyHoursSlot;

/** The windows a booking with this provider must fall inside (D105), in `timeZone`; no windows means any time. */
export type ProviderAvailability = {
    timeZone: string;
    windows: ProviderAvailabilitySlot[];
};

export type ProviderProfile = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    user?: SimpleUser;
    skills?: string[];
    bio?: string;
    portfolio?: Media[];
    /** Weekly recurring availability windows. */
    availability?: ProviderAvailabilitySlot[];
    /** IANA zone of `availability`; unset means the company's zone. */
    timezone?: string;
    averageRating?: number;
    reviewCount?: number;
    completionRate?: number;
    /** Stripe Connect Express — read-only; mutated via createAccountLink / refreshAccountStatus. */
    stripeAccountId?: string;
    stripeChargesEnabled?: boolean;
    stripePayoutsEnabled?: boolean;
    stripeDetailsSubmitted?: boolean;
    stripeAccountSyncedAt?: string;
};
