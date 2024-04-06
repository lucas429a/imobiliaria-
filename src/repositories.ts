import Category from "./entities/categories.entity";
import { AppDataSource } from "./data-source";
import Address from "./entities/addresses.entity";
import User from "./entities/users.entity";
import RealEstate from "./entities/realEstates.entity";
import Schedule from "./entities/schedules.entity";
import { SheduleRepo } from "./interfaces/shedules.interfaces";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate,interface";
import { CategoryRepo } from "./interfaces/categories.interface";
import { UserRepo } from "./interfaces/user.interface";

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const sheduleRepo: SheduleRepo = AppDataSource.getRepository(Schedule)