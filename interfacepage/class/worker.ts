import { IWork } from "../interface/iwork";

export class Worker implements IWork {
    name:string;
    job: string;
    status: string;
    
    constructor(name:string, job:string){
        this.name = name;
        this.job = job;
        this.status = "Working";
    }
    checkStatus(): string; {
        return "Status: " + this.status;
    }
}
