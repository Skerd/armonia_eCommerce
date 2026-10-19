import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {listingPricingTypes, type ListingPricingType} from "../../private/listing/listing.schema-def";

export const SHOP_LISTING_SORTS = ["recommended", "newest", "priceAsc", "priceDesc", "rating"] as const;
export type ShopListingSort = (typeof SHOP_LISTING_SORTS)[number];

export type ShopListingsFormType = {
    search?: string;
    categorySlug?: string;
    countryId?: string;
    stateId?: string;
    cityId?: string;
    pricingType?: ListingPricingType;
    priceMin?: number;
    priceMax?: number;
    minRating?: number;
    sort?: ShopListingSort;
    page?: number;
    limit?: number;
};

const priceBound = z.coerce.number().min(0).max(1_000_000_000).optional();

export function shopListingsFormSchema(languageCode: string, _form: any = null) {
    return z.object({
        search: z.string().max(200).optional(),
        categorySlug: z.string().max(200).optional(),
        countryId: isObjectIdZod("countryId", languageCode).optional(),
        stateId: isObjectIdZod("stateId", languageCode).optional(),
        cityId: isObjectIdZod("cityId", languageCode).optional(),
        pricingType: z.enum(listingPricingTypes).optional(),
        priceMin: priceBound,
        priceMax: priceBound,
        minRating: z.coerce.number().int().min(1).max(5).optional(),
        sort: z.enum(SHOP_LISTING_SORTS).optional(),
        page: z.coerce.number().min(1).max(10000).optional(),
        limit: z.coerce.number().min(1).max(60).optional(),
    });
}

export type ShopMarketplaceIdFormType = {id: string};

/** One listing (`shopListing`) or one provider (`shopProvider`, the provider's user id). */
export function shopMarketplaceIdFormSchema(languageCode: string, _form: any = null) {
    return z.object({
        id: isObjectIdZod("id", languageCode),
    });
}

export type ShopMarketplaceReviewsFormType = {
    listingId?: string;
    providerId?: string;
    page?: number;
    limit?: number;
};

/** Reviews of one listing, or of every order a provider delivered. */
export function shopMarketplaceReviewsFormSchema(languageCode: string, _form: any = null) {
    return z.object({
        listingId: isObjectIdZod("listingId", languageCode).optional(),
        providerId: isObjectIdZod("providerId", languageCode).optional(),
        page: z.coerce.number().min(1).max(1000).optional(),
        limit: z.coerce.number().min(1).max(50).optional(),
    }).refine((form) => Boolean(form.listingId) !== Boolean(form.providerId), {
        message: "listingId or providerId",
        path: ["listingId"],
    });
}
