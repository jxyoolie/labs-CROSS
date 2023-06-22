import { Transport } from "./transport";
export class Wardrobe extends Transport {
    v!: any;
    constructor(override name: string, v:any){
        super()
        this.k = k;
    }
    getPrice() {
        return this.k*this.k*5;
    }
}
