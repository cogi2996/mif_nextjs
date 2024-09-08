export const schemaNewsRequest = z.object({
    title: z.string().min(6,"Toi thieu 5 ky tu"),
    tags: z.string().array().optional(),
    content: z.string().min(6,"Toi thieu 50 ky tu"),
    // newsCategory: categorySchema,
    // authorId: z.string(),
    // thumbnail: z.string(),
})  