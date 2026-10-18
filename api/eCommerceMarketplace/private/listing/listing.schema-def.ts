import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const listingPricingTypes = ["fixed", "hourly"] as const;
export const listingStatuses = ["draft", "active", "inactive"] as const;

export type ListingPricingType = (typeof listingPricingTypes)[number];
export type ListingStatus = (typeof listingStatuses)[number];

export const ListingSchemaDef = {
    title: {type: "string", required: true},
    description: {type: "string", required: false},
    category: {type: "objectId", required: true},
    price: {type: "number", required: false, min: 0},
    priceCurrency: {type: "objectId", required: false},
    pricingType: {type: "enum", required: false, options: listingPricingTypes},
    deliveryDays: {type: "number", required: false, min: 0},
    address: {
        type: "embedded",
        required: false,
        items: {
            country: {type: "objectId", required: false},
            state: {type: "objectId", required: false},
            city: {type: "objectId", required: false},
        }
    },
    mainImage: {type: "mediaId", required: true, publicAccess: true},
    imageGallery: {type: "mediaIdArray", required: false, publicAccess: true},
    videoGallery: {type: "mediaIdArray", required: false, publicAccess: true},
    faqs: {
        type: "embeddedArray",
        required: false,
        items: {
            question: {type: "string", required: true},
            answer: {type: "string", required: true},
        }
    },
    requirements: {type: "stringArray", required: false},
    tags: {type: "stringArray", required: false},
} as const;

export type CreateListingFormType = InferCreateForm<typeof ListingSchemaDef>;
export type EditListingFormType = InferEditForm<typeof ListingSchemaDef>;
