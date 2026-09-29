import type {CurrencySimple} from "../../core/dto/currency.dto";

export type ProductSimple = {
    _id: string;
    title: string;
    slug: string;
    sku?: string;
    status: string;
    type: string;
    currency?: CurrencySimple;
};
