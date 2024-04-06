import Address from "../entities/addresses.entity"
import Category from "../entities/categories.entity"
import RealEstate from "../entities/realEstates.entity"
import AppError from "../errors/AppErrors.error"
import { createRealEstate } from "../interfaces/realEstate,interface"
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories"


export const createRealEstateService = async (data: createRealEstate) => {
    const category: Category | null = await categoryRepo.findOneBy({ id: data.categoryId})
    console.log(data)
  
    if(!category) throw new AppError('Category not found', 404)
    const create = addressRepo.create(data.address)
    const address: Address = await addressRepo.save(create)
    // const realEstate: RealEstate = await realEstateRepo.save({...data, address, category: category!})
  
    return address
}


export const readRealEstateService = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({
      relations: {
        address: true
      }
    })
  }