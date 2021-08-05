import { ShoesModel } from "./shoes.model";

export interface TrademarksModel{
    id: number;
    shoes?: ShoesModel;
    name: string;
    location: string;
    phone:number;
    deal:string;
    email:string;
}