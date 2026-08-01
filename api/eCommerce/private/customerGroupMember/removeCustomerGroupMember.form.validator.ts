import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

/**
 * Request body for removing a member. Uses `userId` (not `user`) because authMW
 * overwrites `req.body.user` with the JWT payload.
 */
export function removeCustomerGroupMemberFormSchema(languageCode: string, form: any = null) {
    return z.object({
        userId: isObjectIdZod(form?.["userIdLabel"] ?? "user", languageCode),
        customerGroup: isObjectIdZod(form?.["customerGroupLabel"] ?? "customerGroup", languageCode),
    });
}
