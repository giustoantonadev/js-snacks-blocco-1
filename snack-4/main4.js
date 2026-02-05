console.log('it works');

/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let numbers = [];

for (let i = 0; i < 6; i++) {
    const number = Number(prompt('Type a number'))
    numbers.push(number)
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);

    }
}

/* 
console.log(numbers); */
