import { z } from "zod"

export const schemaGroup = z.object({
    groupName: z.string().min(1, "Tên nhóm là bắt buộc"),
    description: z.string().default(''),
    categoryId: z.string().min(1, "Vui lòng chọn thể loại"),
    isPublic: z.boolean(),
    groupType: z.enum(["SMALL", "MEDIUM", "LARGE"])
});