import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedules.entity";
import Address from "./addresses.entity";
import Category from "./categories.entity";

@Entity("realEstates")
export default class RealEstate{
    @PrimaryGeneratedColumn("increment")
    id:number


    @Column({type:"boolean",default:false})
    sold:boolean

    @Column({type:"decimal",default:0})
    value: number | string  

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    size:number| string

    @CreateDateColumn({type:"date"})
    createdAt:string

    @UpdateDateColumn({type:"date"})
    upddateAt:string

    @OneToMany(()=>Schedule,(shedule)=>shedule.realEstate)
    shedule:Schedule[]

    @OneToOne(()=> Address,(address)=>address.realEstate)
    @JoinColumn()
    address:Address

    @ManyToOne(()=> Category,(category)=>category.realEstate)
    category:Category
}