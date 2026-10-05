import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const cmsBlockTypes = [
    "hero_banner", "slider", "featured_collection", "trending",
    "best_sellers", "flash_sale", "announcement_bar", "custom_html",
    "video", "grid", "category_showcase", "promotional_section",
] as const;

export type CmsBlockType = (typeof cmsBlockTypes)[number];

export const CMS_BLOCK_CONFIG_LIMIT_MIN = 1;
export const CMS_BLOCK_CONFIG_LIMIT_MAX = 24;

export const CMS_BLOCK_TITLE_MAX = 128;
export const CMS_BLOCK_HEADLINE_MAX = 128;
export const CMS_BLOCK_SUBHEADLINE_MAX = 256;
export const CMS_BLOCK_CTA_LABEL_MAX = 128;
export const CMS_BLOCK_URL_MAX = 1024;
export const CMS_BLOCK_MESSAGE_MAX = 256;
export const CMS_BLOCK_HTML_MAX = 20000;
export const CMS_BLOCK_REGION_MAX = 64;
export const CMS_BLOCK_DEVICE_MAX = 16;

const CmsBlockVisibilityDef = {
    devices: {type: "stringArray", required: false, itemMax: CMS_BLOCK_DEVICE_MAX},
    regions: {type: "stringArray", required: false, itemMax: CMS_BLOCK_REGION_MAX},
} as const;

const CmsBlockSlideDef = {
    headline: {type: "string", required: true, min: 1, max: CMS_BLOCK_HEADLINE_MAX},
    subheadline: {type: "string", required: false, max: CMS_BLOCK_SUBHEADLINE_MAX},
    imageUrl: {type: "string", required: true, min: 1, max: CMS_BLOCK_URL_MAX},
    ctaLabel: {type: "string", required: false, max: CMS_BLOCK_CTA_LABEL_MAX},
    ctaHref: {type: "string", required: false, max: CMS_BLOCK_URL_MAX},
} as const;

const CmsBlockGridItemDef = {
    title: {type: "string", required: false, max: CMS_BLOCK_TITLE_MAX},
    imageUrl: {type: "string", required: false, max: CMS_BLOCK_URL_MAX},
    href: {type: "string", required: false, max: CMS_BLOCK_URL_MAX},
} as const;

const whenHeadlineRequired = {field: "type", whenValues: ["hero_banner", "promotional_section", "trending", "best_sellers"], on: ["create", "edit"]} as const;
const whenLimitRequired = {field: "type", whenValues: ["trending", "best_sellers"], on: ["create", "edit"]} as const;
const whenSlider = {field: "type", whenValues: ["slider"], on: ["create", "edit"]} as const;
const whenAnnouncement = {field: "type", whenValues: ["announcement_bar"], on: ["create", "edit"]} as const;
const whenCustomHtml = {field: "type", whenValues: ["custom_html"], on: ["create", "edit"]} as const;
const whenVideo = {field: "type", whenValues: ["video"], on: ["create", "edit"]} as const;
const whenCollection = {field: "type", whenValues: ["featured_collection", "flash_sale"], on: ["create", "edit"]} as const;
const whenCategoryShowcase = {field: "type", whenValues: ["category_showcase"], on: ["create", "edit"]} as const;
const whenGrid = {field: "type", whenValues: ["grid"], on: ["create", "edit"]} as const;

const CmsBlockConfigDef = {
    headline: {type: "string", required: false, max: CMS_BLOCK_HEADLINE_MAX, requiredWhen: whenHeadlineRequired},
    subheadline: {type: "string", required: false, max: CMS_BLOCK_SUBHEADLINE_MAX},
    imageUrl: {type: "string", required: false, max: CMS_BLOCK_URL_MAX},
    ctaLabel: {type: "string", required: false, max: CMS_BLOCK_CTA_LABEL_MAX},
    ctaHref: {type: "string", required: false, max: CMS_BLOCK_URL_MAX},
    message: {type: "string", required: false, max: CMS_BLOCK_MESSAGE_MAX, requiredWhen: whenAnnouncement},
    linkHref: {type: "string", required: false, max: CMS_BLOCK_URL_MAX},
    html: {type: "string", required: false, max: CMS_BLOCK_HTML_MAX, requiredWhen: whenCustomHtml},
    url: {type: "string", required: false, max: CMS_BLOCK_URL_MAX, requiredWhen: whenVideo},
    collectionId: {type: "objectId", required: false, requiredWhen: whenCollection},
    categoryIds: {type: "objectIdArray", required: false, requiredWhen: whenCategoryShowcase},
    limit: {type: "number", required: false, min: CMS_BLOCK_CONFIG_LIMIT_MIN, max: CMS_BLOCK_CONFIG_LIMIT_MAX, requiredWhen: whenLimitRequired},
    slides: {type: "embeddedArray", required: false, items: CmsBlockSlideDef, requiredWhen: whenSlider},
    items: {type: "embeddedArray", required: false, items: CmsBlockGridItemDef, requiredWhen: whenGrid},
} as const;

export const CmsBlockSchemaDef = {
    type: {type: "enum", required: true, options: cmsBlockTypes},
    title: {type: "string", required: true, min: 1, max: CMS_BLOCK_TITLE_MAX},
    position: {type: "number", required: false, min: 0},
    startsAt: {type: "date", required: false},
    endsAt: {type: "date", required: false},
    visibility: {type: "embedded", required: false, items: CmsBlockVisibilityDef},
    config: {type: "embedded", required: false, items: CmsBlockConfigDef},
} as const;

export type CreateCmsBlockFormType = InferCreateForm<typeof CmsBlockSchemaDef>;
export type EditCmsBlockFormType = InferEditForm<typeof CmsBlockSchemaDef>;
