import {z} from "zod";
import {getValidationMessage, isObjectIdZod, isEnumZod, stringMaxLengthZod, inBetweenRangeZod, isIntegerZod} from "../../../../../core/helpers/zodBuilder";
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

export function shopListingsFormSchema(languageCode: string, form: any = null) {
    const priceBound = (name: string) => inBetweenRangeZod(form?.[`${name}Label`] ?? name, 0, 1_000_000_000, languageCode).optional();
    return z.object({
        search: stringMaxLengthZod(form?.["searchLabel"] ?? "search", 200, languageCode).optional(),
        categorySlug: stringMaxLengthZod(form?.["categorySlugLabel"] ?? "categorySlug", 200, languageCode).optional(),
        countryId: isObjectIdZod("countryId", languageCode).optional(),
        stateId: isObjectIdZod("stateId", languageCode).optional(),
        cityId: isObjectIdZod("cityId", languageCode).optional(),
        pricingType: isEnumZod(form?.["pricingTypeLabel"] ?? "pricingType", listingPricingTypes, listingPricingTypes.join(", "), languageCode).optional(),
        priceMin: priceBound("priceMin"),
        priceMax: priceBound("priceMax"),
        minRating: isIntegerZod(form?.["minRatingLabel"] ?? "minRating", languageCode, {min: 1, max: 5}).optional(),
        sort: isEnumZod(form?.["sortLabel"] ?? "sort", SHOP_LISTING_SORTS, SHOP_LISTING_SORTS.join(", "), languageCode).optional(),
        page: inBetweenRangeZod(form?.["pageLabel"] ?? "page", 1, 10000, languageCode).optional(),
        limit: inBetweenRangeZod(form?.["limitLabel"] ?? "limit", 1, 60, languageCode).optional(),
    });
}

export type ShopMarketplaceIdFormType = {id: string};

/** One listing (`shopListing`) or one provider (`shopProvider`, the provider's user id). */
export function shopMarketplaceIdFormSchema(languageCode: string, form: any = null) {
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
export function shopMarketplaceReviewsFormSchema(languageCode: string, form: any = null) {
    return z.object({
        listingId: isObjectIdZod("listingId", languageCode).optional(),
        providerId: isObjectIdZod("providerId", languageCode).optional(),
        page: inBetweenRangeZod(form?.["pageLabel"] ?? "page", 1, 1000, languageCode).optional(),
        limit: inBetweenRangeZod(form?.["limitLabel"] ?? "limit", 1, 50, languageCode).optional(),
    }).refine((value) => Boolean(value.listingId) !== Boolean(value.providerId), {
        message: getValidationMessage("form", "exactlyOneOf", [form?.["listingIdLabel"] ?? "listingId", form?.["providerIdLabel"] ?? "providerId"], languageCode),
        path: ["listingId"],
    });
}
