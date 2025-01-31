import { NextFunction, Request, Response } from "express"
import User from "../entities/users.entity"
import { userRepo } from "../repositories"
import AppError from "../errors/AppErrors.error"



export const verifyUniqueEmail =async(req: Request, res: Response, next: NextFunction):Promise<void>=> {
    const {email} = req.body
    const user: User | null = await userRepo.findOneBy({email})
  
    if(user) throw new AppError('Email alread exists', 409)
  
    return next()
  }
  
  export const verifyUserExists = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { id } = req.params
    const user: User | null = await userRepo.findOneBy({id: Number(id)})
  
    if(!user) throw new AppError('User not found', 404)
  
    res.locals = {...res.locals, user}
  
    return next()
  }