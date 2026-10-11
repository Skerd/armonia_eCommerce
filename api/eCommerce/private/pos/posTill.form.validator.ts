import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export type PosCatalogFormType = {
    search?: string;
    categoryId?: string;
    barcode?: string;
    page?: number;
    limit?: number;
    warehouseId?: string;
    configId?: string;
};

export function posCatalogFormSchema(languageCode: string, form: any = null) {
    return z.object({
        search: z.string().max(200).optional(),
        categoryId: isObjectIdZod(form?.["categoryIdLabel"] ?? "categoryId", languageCode).optional(),
        barcode: z.string().max(80).optional(),
        page: z.number().int().min(1).optional(),
        limit: z.number().int().min(1).max(100).optional(),
        warehouseId: isObjectIdZod(form?.["warehouseIdLabel"] ?? "warehouseId", languageCode).optional(),
        configId: isObjectIdZod(form?.["configIdLabel"] ?? "configId", languageCode).optional(),
    });
}

export type PosCurrentSessionFormType = {
    configId?: string;
};

export function posCurrentSessionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        configId: isObjectIdZod(form?.["configIdLabel"] ?? "configId", languageCode).optional(),
    });
}

export type PosSessionIdFormType = {
    sessionId: string;
};

export function posSessionIdFormSchema(languageCode: string, form: any = null) {
    return z.object({
        sessionId: isObjectIdZod(form?.["sessionIdLabel"] ?? "sessionId", languageCode),
    });
}

export type PosSessionOrdersFormType = PosSessionIdFormType & {
    state?: "paid" | "draft" | "refunded";
    limit?: number;
};

export function posSessionOrdersFormSchema(languageCode: string, form: any = null) {
    return posSessionIdFormSchema(languageCode, form).extend({
        state: z.enum(["paid", "draft", "refunded"]).optional(),
        limit: z.number().int().min(1).max(100).optional(),
    });
}

export type PosCustomerSearchFormType = {
    query?: string;
    search?: string;
};

export function posCustomerSearchFormSchema(_languageCode: string, _form: any = null) {
    return z.object({
        query: z.string().max(200).optional(),
        search: z.string().max(200).optional(),
    });
}

export type VerifyPosManagerPinFormType = {
    configId: string;
    pin: string;
    managerId: string;
};

export function verifyPosManagerPinFormSchema(languageCode: string, form: any = null) {
    return z.object({
        configId: isObjectIdZod(form?.["configIdLabel"] ?? "configId", languageCode),
        pin: z.string().min(1).max(64),
        managerId: isObjectIdZod(form?.["managerIdLabel"] ?? "managerId", languageCode),
    });
}
