import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstates.entity";


@Entity("shedules")
export default class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number
  
    @Column({ type: 'date' })
    date: string
  
    @Column({ type: 'time' })
    hour: string

    @ManyToOne(()=>User,(user)=>user.shedules)
    user : User

    @ManyToOne(()=> RealEstate,(realestate)=>realestate.shedule)
    realEstate: RealEstate
}