import { IWork } from "../interface/iwork";

export class Engineer implements IWork {
    name:string;
    job: string;
    status: string;
    
    constructor(name:string, job:string){
        this.name = name;
        this.job = "Engineer";
        this.status = "Working in engineering";
    }
    checkStatus(): string; {
        return "Status: " + this.status;
    }
}