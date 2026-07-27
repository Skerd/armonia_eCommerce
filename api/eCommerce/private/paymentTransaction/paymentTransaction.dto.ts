import type {LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type PaymentTransaction = OwnershipData &
    LifeCycleData & {
        _id: string;
        order?: {_id: string; orderNumber?: string; status?: string; paymentStatus?: string; grandTotal?: number};
        checkout?: {_id: string};
        gateway: string;
        type: string;
        status: string;
        amount: number;
        /** Pre-formatted amount with currency symbol/abbreviation. */
        amountDisplay?: string;
        /** Sheet/card title: gateway id, or type + amount when missing. */
        displayTitle?: string;
        currency?: {_id: string; name?: string; symbol?: string; abbreviation?: string; code?: string};
        gatewayTransactionId?: string;
        gatewayPaymentMethodId?: string;
        failureReason?: string;
        refundedAmount: number;
        refundedAmountDisplay?: string;
        metadata?: Record<string, unknown>;
        metadataDisplay?: string;
        company?: {_id: string; name: string};
    };
