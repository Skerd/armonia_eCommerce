import type {CurrencySimple} from "../../core/dto/currency.dto";

export type PosConfigSimple = {
    _id: string;
    name: string;
    isActive: boolean;
    warehouses?: string[];
    currency?: CurrencySimple;
};
