import type {Media} from "../../../../../core/types";

export type ProductVariant = {
    _id: string;
    product: {_id: string; title: string; slug: string};
    sku?: string;
    barcode?: string;
    attributeCombination?: {attribute: {_id: string; name: string}; value: string}[];
    price?: number;
    compareAtPrice?: number;
    costPrice?: number;
    currency?: {_id: string; name: string; symbol: string; abbreviation: string};
    weight?: number;
    dimensions?: {length?: number; width?: number; height?: number};
    mainImage?: Media;
    position?: number;
    status: "active" | "inactive";
    trackInventory?: boolean;
    inventoryQuantity?: number;
    company?: {_id: string; name: string};
};
