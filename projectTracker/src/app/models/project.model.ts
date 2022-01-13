import { Task } from "./task.model";

export class Project{
    constructor(
        public id?:number,
        public name?:string,
        public description?:string,
        public categoryId?: number,
        public completePercent?:number,
        public startDate?:Date,
        public tasks?:Task[]
    ){}
}