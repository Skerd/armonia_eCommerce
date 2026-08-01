export type DigitalDeliveryFile = {
    _id: string;
    fileName?: string;
};

export type DigitalDelivery = {
    _id: string;
    order: string;
    product?: {_id: string; title?: string; slug?: string};
    token: string;
    files: DigitalDeliveryFile[];
    downloadLimit: number;
    downloadCount: number;
    remainingDownloads: number;
    expiresAt?: string;
};
