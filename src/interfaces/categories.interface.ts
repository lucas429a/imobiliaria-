import { z } from "zod";
import { createCategorySchema, readAllCategoriesSchema } from "../schemas/category.schema";
import { Repository } from "typeorm";
import Category from "../entities/categories.entity";

export type CreateCategory = z.infer <typeof createCategorySchema >

export type CategoryRepo = Repository <Category>

export type ReadAllCategories = z.infer<typeof readAllCategoriesSchema>