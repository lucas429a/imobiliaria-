import { NextFunction, Request, Response } from "express"
import RealEstate from "../entities/realEstates.entity"
import { realEstateRepo, sheduleRepo } from "../repositories"
import AppError from "../errors/AppErrors.error"
import Schedule from "../entities/schedules.entity"




export const verifyRealEstateExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {realEstateId} = req.body
    const realEstate: RealEstate | null = await realEstateRepo.findOne({
      where: {
        id: Number(realEstateId)
      }
    })
  
    if(!realEstate) throw new AppError('Real Estate not found', 404)
  
    return next()
}


export const verifyRealEstateSheduleExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {realEstateId, hour, date} = req.body
    const shedule: Schedule | null = await sheduleRepo.findOne({
      where: {
        realEstate: {
          id: Number(realEstateId)
        },
        hour,
        date
      }
    })
  
    if(shedule) throw new AppError('shedule to this realestate at this date and time already exists', 409)
  
    return next()
  
}


export const verifyUserSheduleExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let {sub} = res.locals.decoded
    sub = Number(sub)
    const {hour, date} = req.body
    const shedule: Schedule | null = await sheduleRepo.findOne({
      where: {
        user: {
          id: sub
        },
        date,
        hour
      },
    })
  
    if(shedule) throw new AppError('User shedule to this realestate at this date and time already exists', 409)
  
    return next()
  
}