import { IWork } from "../interface/iwork";

export class Admin implements IWork {
    name:string;
    job: string;
    status: string;
    
    constructor(name:string, job:string){
        this.name = name;
        this.job = "Admin";
        this.status = "Working in admin";
    }
    checkStatus(): string; {
        return "Status: " + this.status;
    }
}