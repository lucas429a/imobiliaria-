import { Request, Response } from "express"
import { createSheduleService, readAllShedulesRealEstatesService } from "../services/shedule.service"

export const createSheduleController = async (req: Request, res: Response): Promise<Response> => {
    const {sub} = res.locals.decoded
    await createSheduleService(req.body, sub)
  
    return res.status(201).json({message: 'Shedule created'})
}

export const readAllShedulesRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params
    const realestate = await readAllShedulesRealEstatesService(Number(id))
  
    return res.status(200).json(realestate)
}
