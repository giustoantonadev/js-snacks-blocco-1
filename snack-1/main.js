console.log('it works');
 // snack 1
/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let user_number = Number(prompt('Aggiungi un numero'));
let user_number_2 = Number(prompt('Aggiungi un numero'));

if( user_number > user_number_2){
    console.log(user_number);
    
} else if ( user_number_2 > user_number){
    console.log(user_number_2);
    
} else {
    console.log(user_number, user_number_2);
    
}