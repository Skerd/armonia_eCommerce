import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const cmsBlockTypes = [
    "hero_banner", "slider", "featured_collection", "trending",
    "best_sellers", "flash_sale", "announcement_bar", "custom_html",
    "video", "grid", "category_showcase", "promotional_section",
] as const;

export type CmsBlockType = (typeof cmsBlockTypes)[number];

const CmsBlockVisibilityDef = {
    devices: {type: "stringArray", required: false},
    regions: {type: "stringArray", required: false},
} as const;

export const CmsBlockSchemaDef = {
    type: {type: "enum", required: true, options: cmsBlockTypes},
    title: {type: "string", required: true},
    position: {type: "number", required: false, min: 0},
    startsAt: {type: "date", required: false},
    endsAt: {type: "date", required: false},
    visibility: {type: "embedded", required: false, items: CmsBlockVisibilityDef},
    abTestVariant: {type: "string", required: false},
} as const;

export type CreateCmsBlockFormType = InferCreateForm<typeof CmsBlockSchemaDef> & {
    config: Record<string, unknown>;
};

export type EditCmsBlockFormType = InferEditForm<typeof CmsBlockSchemaDef> & {
    _id: string;
    config?: Record<string, unknown>;
};
