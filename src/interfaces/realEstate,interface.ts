import { z } from "zod";
import { createRealEstateSchema, readRealEstateSchema, realEstateSchema } from "../schemas/realEstate.schema";
import { Repository } from "typeorm";
import RealEstate from "../entities/realEstates.entity";
import Address from "../entities/addresses.entity";

export type createRealEstate = z.infer<typeof createRealEstateSchema>

export type RealEstateRepo = Repository <RealEstate>

export type AddressRepo = Repository <Address>

export type realEstate =  z.infer<typeof readRealEstateSchema>