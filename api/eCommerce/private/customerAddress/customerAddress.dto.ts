export type CustomerAddress = {
    _id: string;
    firstName: string;
    lastName: string;
    phone?: string;
    street: string;
    city: string;
    state?: string;
    postalCode?: string;
    country?: {_id: string; name?: string; code?: string};
    isDefault: boolean;
    label?: string;
    company?: {_id: string; name: string};
    createdAt?: string;
    deletedAt?: string;
};
