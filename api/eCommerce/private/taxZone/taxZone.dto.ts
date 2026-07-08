import {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type TaxZone = DeletedData &
    OwnershipData & {
    _id: string;
    name: string;
    country: {_id: string; name: string};
    states?: {_id: string; name: string}[];
    postalCodePatterns?: string[];
    rates: {
        name: string;
        rate: number;
        isCompound: boolean;
        appliesTo: string;
    }[];
    priority: number;
    isActive: boolean;
    company?: {_id: string; name: string};
    createdAt?: string;
};
