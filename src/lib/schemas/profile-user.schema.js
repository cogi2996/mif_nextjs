import { z } from 'zod'
export const schemaProfileUser = z.object({
  displayName: z.string().min(6, "Tối thiểu 5 ký tự"),
  dob: z.date(),
  bio: z.string(),
})  
