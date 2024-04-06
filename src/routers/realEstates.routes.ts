import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstate.middleware";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { createRealEstateController, readAllRealEstateController } from "../controller/realEstate.controller";

export const realEstateRouter:Router = Router()

realEstateRouter.post("/",verifyToken,
verifyAdmin,
validateBody(createRealEstateSchema),
verifyAddressExists,
createRealEstateController
)

realEstateRouter.get("/",readAllRealEstateController)