import { z } from 'zod'

const categorySchema = z.object({id: z.number().positive(),name: z.string().max(120)})

export const createCategorySchema = categorySchema.omit({ id: true })

export const readAllCategoriesSchema = categorySchema.array()
