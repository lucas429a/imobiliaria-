import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueEmail, verifyUserExists } from "../middlewares/users.middlewares";
import { createUserController, deleteUserController, readAllUsersController, updateUserController } from "../controller/user.controller";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

export const usersRouter :Router = Router()

usersRouter.post("/",validateBody(createUserSchema),verifyUniqueEmail,createUserController)
usersRouter.get("/",verifyToken,verifyAdmin,readAllUsersController)
usersRouter.patch("/:id",validateBody(updateUserSchema),verifyToken,verifyUserExists,verifyPermissions,updateUserController)
usersRouter.delete("/:id",verifyToken,verifyUserExists,verifyPermissions,deleteUserController)