import { z } from "zod";

const award = z.object({
    name: z.string(),
    date: z.date(),
})


export const schemaActor = z.object({
    name: z.string(),
    dateOfBirth: z.date(),
    bio: z.string(),
    awards: z.array(award).nullable(),
    profilePictureUrl: z.string(),
})