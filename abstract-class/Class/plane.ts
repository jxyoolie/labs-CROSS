import { Transport } from "./transport";
export class Plane extends transport {
    h!: any;
    v!: any;
    constructor(override name:string, h:any, v:any){
        super();
        this.h = h;
        this.v = v;
    }
    getPrice() {
        return Math.ceil(100*this.h*this.v);
    }            
}
