import { IWork } from "../interface/iwork";

export class Team implements IWork {
    name:string;
    job: string;
    status: string;
    
    constructor(name:string, job:string){
        this.name = name;
        this.job = "Team";
        this.status = "Working in team";
    }
    checkStatus(): string; {
        return "Status: " + this.status;
    }
}