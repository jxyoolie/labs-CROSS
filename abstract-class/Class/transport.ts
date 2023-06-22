export abstract class Transport {
    name!: string;
    constructor(){ }
    show(){
        return "Назва = "+this.name;
    }
    getName(){
        return this.name;
    }
    abstract getPrice():any;
}
