 import {hasFormatter }from '../interfaces/hasFormatter'
 
 export class Invoice implements hasFormatter{
    // client : string;
    // details: string;
    // amount : number;

    constructor(readonly client: string,
        private details: string,
        public amount : number){}

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`   
    }
}