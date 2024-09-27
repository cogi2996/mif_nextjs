import { z } from "zod"

export const schemaLogin = z.object({
    email: z.string().email(),
    password: z.string(),
})

export const schemaRegister = z.object({
    displayName: z.string(),
    email: z.string().email(),
    password: z.string(),
})  