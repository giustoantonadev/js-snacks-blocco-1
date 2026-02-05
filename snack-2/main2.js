console.log('it works');
 /*
 L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const userWord = prompt('Scrivi una parola')
const userWordTwo = prompt("Scrivi una seconda parola")

if (userWord.length > userWordTwo.length){
    console.log(userWord, userWordTwo);
    
} else if (userWordTwo.length > userWord.length) {
    console.log(userWordTwo, userWord);
    
} else {
    console.log(userWord, userWordTwo);
    
}