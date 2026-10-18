import type {CurrencySimple} from "../../core/dto/currency.dto";

export type ListingPackageSimple = {
    _id: string;
    name: string;
    description?: string;
    order: number;
    deliveryDays: number;
    price: {
        amount: number;
        currency: CurrencySimple;
    };
};
