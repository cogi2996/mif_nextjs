import { z } from 'zod'
export const schemaPost = z.object({
    groupId: z.string(),
    title: z.string(),
    content: z.string(),
    mediaUrls: z.array(z.string()).optional()
})  
