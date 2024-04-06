import { Router } from "express";
import { usersRouter } from "./users.routes";
import { sessionRouter } from "./session.routes";
import { categoryRouter } from "./category.routes";
import { realEstateRouter } from "./realEstates.routes";
import { shedulesRouter } from "./shedule.routes";

export const routes:Router = Router()


routes.use("/users",usersRouter)
routes.use("/login",sessionRouter)
routes.use("/categories",categoryRouter)
routes.use("/realEstate",realEstateRouter)
routes.use("/shedule",shedulesRouter)