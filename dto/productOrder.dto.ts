import type {CurrencySimple} from "../../core/dto/currency.dto";
export type ProductOrderSimple = {
    _id: string;
    orderNumber: string;
    status: string;
    paymentStatus: string;
    grandTotal: number;
    /** The order's own currency: its refunds and returns are in it (UX-07). */
    currency?: CurrencySimple;
};
