import { z } from "zod";
import { createUserSchema, userLoginSchema, userReturnSchema } from "../schemas/user.schema";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/users.entity";

export type UserCreate = z.infer <typeof createUserSchema>

export type BodyUserUpdate = Omit< UserCreate , "admin">

export type UserUpdate = DeepPartial <BodyUserUpdate>

export type UserReturn = z.infer<typeof userReturnSchema>

export type UserLogin = z.infer<typeof userLoginSchema>

export type UserLoginReturn = {token:string}

export type UserRepo = Repository <User>

export type UserReadReturn = UserReturn[]