import {Invoice} from './classes/invoices.js'
import { hasFormatter } from './interfaces/hasFormatter.js';
import {Payment} from './classes/Payment.js'
import { ListTemplate } from './classes/listTemplates.js';

const invOne  = new Invoice('marioo','work on website', 200)
const inTwo = new Invoice('luigi', 'work on web appication',300)

// console.log(invOne, inTwo)
//set type of array to be object created from the Invoice class only
let invoices : Invoice[] = [];
invoices.push(invOne)
invoices.push(inTwo)

invoices.forEach( inv => {
    console.log(inv.client, inv.amount, inv.format())
})

// const anchor = document.querySelector('a')!;

// console.log(anchor.href)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    let doc : hasFormatter;
    if(type.value  == 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber )
    }
    else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber )
    }

    list.render(doc, type.value, 'end');
    // console.log(doc)

    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // )
})

//generics 
const addUID = <T extends object>(obj : T)=>{
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}
let docOne = addUID({name: 'yoshi', age: 40});

console.log(docOne.name);