/**
 * Public storefront marketplace DTOs — buyer-facing shapes of active listings
 * and their providers (no contact details, no payout fields). Media fields are
 * Media ids; the client resolves them to `/api/auxiliary/public/media/{id}`.
 */

import type {ListingPricingType} from "../../private/listing/listing.schema-def";

export type ShopPlace = {
    _id: string;
    name: string;
};

/** Where the provider offers the listing; any level may be missing. */
export type ShopListingLocation = {
    country?: ShopPlace;
    state?: ShopPlace;
    city?: ShopPlace;
};

export type ShopMarketplaceCurrency = {
    _id: string;
    symbol?: string;
    abbreviation?: string;
    decimalPlaces?: number;
};

export type ShopListingCategory = {
    _id: string;
    name: string;
    slug: string;
    parent?: string;
    order?: number;
    /** Active listings filed directly under this category (children not included). */
    listingCount: number;
};

export type ShopProviderSummary = {
    /** The provider's user id. */
    _id: string;
    name: string;
};

export type ShopListingPromotion = "featured" | "sponsored";

export type ShopListingCard = {
    _id: string;
    title: string;
    mainImage?: string;
    category?: {_id: string; name: string; slug: string};
    provider?: ShopProviderSummary;
    price?: number;
    /** Lowest price across the base offer and its packages. */
    fromPrice?: number;
    currency?: ShopMarketplaceCurrency;
    pricingType?: ListingPricingType;
    deliveryDays?: number;
    location?: ShopListingLocation;
    avgRating?: number;
    reviewCount?: number;
    promotion?: ShopListingPromotion;
    packageCount?: number;
};

export type ShopListingPackage = {
    _id: string;
    name: string;
    description?: string;
    price: number;
    currency?: ShopMarketplaceCurrency;
    deliveryDays: number;
};

export type ShopListingAddOn = {
    _id: string;
    name: string;
    price: number;
    currency?: ShopMarketplaceCurrency;
    deliveryDays?: number;
};

export type ShopAvailabilitySlot = {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
};

export type ShopProviderProfile = ShopProviderSummary & {
    bio?: string;
    skills?: string[];
    availability?: ShopAvailabilitySlot[];
    portfolio?: string[];
    averageRating?: number;
    reviewCount?: number;
    completionRate?: number;
    memberSince?: string;
};

export type ShopListingDetail = ShopListingCard & {
    description?: string;
    gallery?: string[];
    faqs?: {question: string; answer: string}[];
    requirements?: string[];
    tags?: string[];
    packages: ShopListingPackage[];
    addOns: ShopListingAddOn[];
    provider?: ShopProviderProfile;
    related: ShopListingCard[];
};

export type ShopMarketplaceReview = {
    _id: string;
    rating: number;
    comment?: string;
    reviewerName?: string;
    listingTitle?: string;
    createdAt?: string;
};

export type ShopListingTaxonomyResponse = {
    data: {
        categories: ShopListingCategory[];
        /** Distinct places used by active listings, for the location filter. */
        locations: ShopListingLocation[];
        listingCount: number;
    };
};

export type ShopListingsResponse = {
    data: ShopListingCard[];
    total: number;
    page: number;
    limit: number;
};

export type ShopListingResponse = {
    data: ShopListingDetail;
};

export type ShopMarketplaceReviewsResponse = {
    data: ShopMarketplaceReview[];
    total: number;
};

export type ShopProviderResponse = {
    data: {
        provider: ShopProviderProfile;
        listings: ShopListingCard[];
    };
};
