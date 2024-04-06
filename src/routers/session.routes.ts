import { Router } from 'express'
import { loginController } from '../controller/session.controller'

export const sessionRouter: Router = Router()

sessionRouter.post('/',loginController)