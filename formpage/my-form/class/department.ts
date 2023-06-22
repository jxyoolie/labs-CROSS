export class Department{
    name: string = "";
    dean: string = "";
    phone: string = ""
    address: string = ""
    kafedras: string[] = []
    constructor(name: string, dean: string, phone: string, address: string, kafedras: string[]) {
        this.name = name;
        this.dean = dean;
        this.phone = phone;
        this.address = address;
        this.kafedras = kafedras;
    }
}