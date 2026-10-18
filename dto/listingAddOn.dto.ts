import type {CurrencySimple} from "../../core/dto/currency.dto";

export type ListingAddOnSimple = {
    _id: string;
    name: string;
    deliveryDays?: number;
    price: {
        amount: number;
        currency: CurrencySimple;
    };
};
