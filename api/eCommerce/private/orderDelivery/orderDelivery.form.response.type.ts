export type OrderDelivery = {
    _id: string;
    orderId: string;
    message?: string;
    attachments: { _id: string; url?: string; originalName?: string }[];
    status: "submitted" | "accepted" | "revision_requested";
};

export type OrderDeliveryFormResponseType = {
    data: OrderDelivery[];
    total: number;
};
