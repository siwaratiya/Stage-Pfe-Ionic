import { Dep } from './dep';

export class Reclamation {
    id_rec!: number;
    id!: number;
    //id_service!: number; 
    type_rec!:string;
    description_rec!: string;
    etat_rec!: string;
    public services:Array<Dep>=[];
}       
