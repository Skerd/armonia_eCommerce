import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type PosOrderState = "draft" | "paid" | "cancel" | "refunded";

export type PosOrderLineProduct = {
    _id: string;
    title?: string;
    sku?: string;
};

export type PosOrderLine = {
    _id?: string;
    product: PosOrderLineProduct | string;
    variant?: string;
    quantity: number;
    /** Cumulative qty already refunded (remaining = quantity - quantityRefunded). */
    quantityRefunded?: number;
    unitPrice: number;
    discountPercent: number;
    discountAmount: number;
    priceSubtotal: number;
    priceTotal: number;
    taxAmount: number;
    productName: string;
    productSku?: string;
    barcode?: string;
    currency?: {_id: string; name: string; symbol: string; abbreviation: string};
};

export type PosOrderPayment = {
    paymentMethod: {_id: string; name?: string; type?: string} | string;
    paymentMethodName?: string;
    paymentMethodType?: string;
    amount: number;
    currency?: {_id: string; name: string; symbol: string; abbreviation: string};
    paymentDate: string;
    terminalAuthCode?: string;
    terminalReference?: string;
    terminalId?: string;
};

export type PosOrder = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    session: {_id: string; name: string};
    config: {_id: string; name: string};
    state: PosOrderState;
    cashier: {_id: string; name: string; surname: string};
    customer?: {_id: string; name: string; surname: string};
    customerName?: string;
    lines: PosOrderLine[];
    payments: PosOrderPayment[];
    amountTax: number;
    amountTotal: number;
    amountPaid: number;
    amountReturn: number;
    discountTotal: number;
    /** Sum of refund amounts already issued against this sale. */
    amountRefunded?: number;
    note?: string;
    orderDiscountPercent?: number;
    clientRequestId?: string;
    productOrder?: {_id: string; orderNumber?: string};
    refundOf?: {_id: string; name?: string};
    isRefund: boolean;
    /** CIS IIC / NSLF */
    nslf?: string;
    /** CIS FIC / NIVF */
    nivf?: string;
    /** E-invoice EIC */
    eic?: string;
    qrVerifyUrl?: string;
    fiscalIssueDateTime?: string;
    fiscalInvNum?: string;
    fiscalInvOrdNum?: string;
    fiscalConfig?: string;
    fiscalizedAt?: string;
    einvoiceAt?: string;
    fiscalError?: string;
};
