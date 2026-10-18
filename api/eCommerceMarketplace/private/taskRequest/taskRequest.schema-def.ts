import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const taskRequestStatuses = ["open", "closed", "awarded"] as const;

export type TaskRequestStatus = (typeof taskRequestStatuses)[number];

const TaskRequestAddressDef = {
    street: {type: "string", required: true},
    postalCode: {type: "string", required: true},
    country: {type: "objectId", required: true},
    state: {type: "objectId", required: false},
    city: {type: "objectId", required: true},
    latitude: {type: "number", required: true, min: -90, max: 90},
    longitude: {type: "number", required: true, min: -180, max: 180},
} as const;

export const TaskRequestSchemaDef = {
    title: {type: "string", required: true},
    description: {type: "string", required: false},
    category: {type: "objectId", required: true},
    budgetMin: {type: "number", required: true, min: 0},
    budgetMax: {type: "number", required: true, min: 0},
    currency: {type: "objectId", required: true},
    address: {type: "embedded", required: true, items: TaskRequestAddressDef},
    mainImage: {type: "mediaId", required: true, publicAccess: true},
    imageGallery: {type: "mediaIdArray", required: false, publicAccess: true},
    videoGallery: {type: "mediaIdArray", required: false, publicAccess: true},
} as const;

export type CreateTaskRequestFormType = InferCreateForm<typeof TaskRequestSchemaDef>;
export type EditTaskRequestFormType = InferEditForm<typeof TaskRequestSchemaDef>;
