import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {PosConfigSimple} from "../../../../dto/posConfig.dto";
import type {PosSessionSimple} from "../../../../dto/posSession.dto";
import type {PosOrderSimple} from "../../../../dto/posOrder.dto";
import type {PosPaymentMethodSimple} from "../../../../dto/posPaymentMethod.dto";
import type {ProductSimple} from "../../../../dto/product.dto";
import type {ProductOrderSimple} from "../../../../dto/productOrder.dto";

export type PosOrderState = "draft" | "paid" | "cancel" | "refunded";

export type PosOrderLine = {
    _id?: string;
    product: ProductSimple | string;
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
    currency?: CurrencySimple;
};

export type PosOrderPayment = {
    paymentMethod: PosPaymentMethodSimple | string;
    paymentMethodName?: string;
    paymentMethodType?: string;
    amount: number;
    currency?: CurrencySimple;
    paymentDate: string;
    terminalAuthCode?: string;
    terminalReference?: string;
    terminalId?: string;
};

export type PosOrder = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    session: PosSessionSimple;
    config: PosConfigSimple;
    state: PosOrderState;
    cashier: SimpleBlankUser;
    customer?: SimpleBlankUser;
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
    productOrder?: ProductOrderSimple;
    refundOf?: PosOrderSimple;
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
