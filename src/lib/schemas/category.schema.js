import { z } from "zod"

export const schemaCategory = z.object({
    categoryName: z.string(),
    description: z.string(),
})
