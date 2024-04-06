import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstateExists, verifyRealEstateSheduleExists, verifyUserSheduleExists } from "../middlewares/shedules.middlewares";
import { createNewSheduleSchema } from "../schemas/shedule.schema";
import { createSheduleController, readAllShedulesRealEstateController } from "../controller/shedules.controller";

export const shedulesRouter : Router = Router()

shedulesRouter.post("/",
verifyToken,
validateBody(createNewSheduleSchema),
verifyRealEstateExists,
verifyRealEstateSheduleExists,
verifyUserSheduleExists,
createSheduleController)


shedulesRouter.get("/realEstate/:id",
verifyToken,
verifyAdmin,
readAllShedulesRealEstateController)