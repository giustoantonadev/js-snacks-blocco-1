console.log('it works');
/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let number = 0;

for (let i = 0; i < 10; i++) {
    const numbers = Number(prompt('Type a number'));
    number += numbers;
    console.log(numbers);
    
}

console.log(number);
