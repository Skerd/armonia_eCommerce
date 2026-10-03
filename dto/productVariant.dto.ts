export type ProductVariantSimple = {
    _id: string;
    sku: string;
    /** `attribute` is populated ({_id, name}) when the snippet allows it, else a bare id. */
    attributeCombination?: {attribute?: {_id?: string; name?: string} | string; value: string}[];
    price: number;
    status: string;
};
