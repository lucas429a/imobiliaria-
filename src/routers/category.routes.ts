import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middlewares";
import { createCategorySchema } from "../schemas/category.schema";
import { createCategoryController, readCategoryController, readRealEstateByCategoryController } from "../controller/categories.controller";

export const categoryRouter : Router = Router()


categoryRouter.post("/",
validateBody(createCategorySchema),
verifyToken,
verifyUniqueCategoryName,
verifyAdmin,
createCategoryController
)

categoryRouter.get("/",readCategoryController)
categoryRouter.get("/:id/realEstate",verifyCategoryExists,readRealEstateByCategoryController)