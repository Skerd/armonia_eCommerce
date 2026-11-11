import type {Media} from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {CountrySimple} from "../../../../../core/dto/country.dto";
import type {StateSimple} from "../../../../../core/dto/state.dto";
import type {CitySimple} from "../../../../../core/dto/city.dto";
import type {SimpleUser} from "../../../../../core/dto/user.dto";
import type {ListingCategorySimple} from "../../../../dto/listingCategory.dto";
import type {PromotionSimple} from "../../../../dto/promotion.dto";
import type {ListingAddOn} from "../listingAddOn/listingAddOn.dto";
import type {ListingPackage} from "../listingPackage/listingPackage.dto";
import type {Order} from "../order/order.dto";
import type {Booking} from "../booking/booking.dto";
import type {Review} from "../review/review.dto";
import type {ListingFlag} from "../listingFlag/listingFlag.dto";

export type Listing = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    title: string;
    description?: string;
    category?: ListingCategorySimple;
    provider?: SimpleUser;
    price?: number;
    priceCurrency?: CurrencySimple;
    pricingType?: "fixed" | "hourly";
    deliveryDays?: number;
    address?: {
        country?: CountrySimple;
        state?: StateSimple;
        city?: CitySimple;
    };
    status?: string;
    mainImage?: Media;
    imageGallery?: Media[];
    videoGallery?: Media[];
    faqs?: {question: string; answer: string}[];
    requirements?: string[];
    tags?: string[];
    promotions?: PromotionSimple[];
    avgRating?: number;
    reviewCount?: number;
    listingAddOns?: ListingAddOn[];
    listingPackages?: ListingPackage[];
    /**
     * The listing's records, newest first, on its single read only (listing hub); each list is absent when the caller
     * may not read that model.
     */
    orders?: Order[];
    bookings?: Booking[];
    reviews?: Review[];
    /** Reports against the listing (all for an admin, else the caller's own). */
    flags?: ListingFlag[];
};
