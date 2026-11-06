import {z} from "zod";
import {isObjectIdZod, isEnumZod, stringMaxLengthZod, isIntegerZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";

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
        search: stringMaxLengthZod(form?.["searchLabel"] ?? "search", 200, languageCode).optional(),
        categoryId: isObjectIdZod(form?.["categoryIdLabel"] ?? "categoryId", languageCode).optional(),
        barcode: stringMaxLengthZod(form?.["barcodeLabel"] ?? "barcode", 80, languageCode).optional(),
        page: isIntegerZod(form?.["pageLabel"] ?? "page", languageCode, {min: 1}).optional(),
        limit: isIntegerZod(form?.["limitLabel"] ?? "limit", languageCode, {min: 1, max: 100}).optional(),
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
        state: isEnumZod(form?.["stateLabel"] ?? "state", ["paid", "draft", "refunded"], "paid, draft, refunded", languageCode).optional(),
        limit: isIntegerZod(form?.["limitLabel"] ?? "limit", languageCode, {min: 1, max: 100}).optional(),
    });
}

export type PosCustomerSearchFormType = {
    query?: string;
    search?: string;
};

export function posCustomerSearchFormSchema(languageCode: string, form: any = null) {
    return z.object({
        query: stringMaxLengthZod(form?.["queryLabel"] ?? "query", 200, languageCode).optional(),
        search: stringMaxLengthZod(form?.["searchLabel"] ?? "search", 200, languageCode).optional(),
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
        pin: stringMinMaxLengthZod(form?.["pinLabel"] ?? "pin", 1, 64, languageCode),
        managerId: isObjectIdZod(form?.["managerIdLabel"] ?? "managerId", languageCode),
    });
}
