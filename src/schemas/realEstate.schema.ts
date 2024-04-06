import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(true),
    value: z.number().default(0),
    size: z.number().positive(),
    createdAt: z.string(),
    updateAt: z.string(),
    address: z.object({
        id:z.number().positive(),
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.string().or(z.number()),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    categoryId: z.number().int().positive()
})

export const createRealEstateSchema = realEstateSchema.omit({ id: true, createdAt: true, updateAt: true,})

export const readRealEstateSchema = realEstateSchema.array()