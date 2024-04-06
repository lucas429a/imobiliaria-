import User from "../entities/users.entity"
import { UserCreate, UserReadReturn, UserReturn, UserUpdate } from "../interfaces/user.interface"
import { userRepo } from "../repositories"
import { userReturnListSchema, userReturnSchema } from "../schemas/user.schema"



export const createUserService = async (data: UserCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(data)
    console.log(user)
    await userRepo.save(user)
    return userReturnSchema.parse(user)
}

export const readAllUsersService = async (): Promise<UserReadReturn> => {
    const users: User[] = await userRepo.find()
  
    return userReturnListSchema.parse(users)
}

export const updateUserService = async (data: UserUpdate, user: User): Promise<UserReturn> => {
    const userUpdate: User = userRepo.create({...user, ...data})
  
    await userRepo.save(userUpdate)
  
    return userReturnSchema.parse(userUpdate)
}

export const deleteUserService = async (user: User): Promise<void> => {
    await userRepo.softRemove(user)
}