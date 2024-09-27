import { z } from "zod";

const award = z.object({
    name: z.string(),
    date: z.date(),
})


export const schemaMovie = z.object({
    title: z.string(),
    description: z.string(),
    genreIds: z.array(z.string()),
    releaseDate: z.date(),
    directorId: z.array(z.string()),
    castIds: z.array(z.string()),
    posterUrl: z.string(),
    trailerUrl: z.string(),
    duration: z.string(),
    country: z.string(),
    budget: z.number(),
    awards: z.array(award),
})