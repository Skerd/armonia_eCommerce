import {z} from "zod";

export type ProviderEarningsFormType = {
    startDate?: string;
    endDate?: string;
};

export function providerEarningsFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        startDate: z.string().optional(),
        endDate: z.string().optional(),
    });
}

export type ProviderEarningsByCurrency = {
    currencyId: string;
    currencySymbol?: string;
    /** Sum of release rows to this provider. */
    released: number;
    /** Sum of platform fees taken on this provider's orders. */
    fees: number;
    /** Sum of refunds back to customers on this provider's orders. */
    refunded: number;
    /** Sum of completed holds on this provider's orders not yet released/refunded. */
    pendingHolds: number;
};

export type ProviderEarningsResponse = {
    byCurrency: ProviderEarningsByCurrency[];
};
