// Scrivere un programma che chieda all’utente:
// - Nome e cognome del passeggero
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


const generateButton = document.querySelector('.btn-success');
const resetButton = document.querySelector('.btn-danger');

generateButton.addEventListener('click', function(){
    const nameSurname = document.getElementById('namesurname').value;
    const distance = document.getElementById('distance').value;
    const age = document.getElementById('age').value;
    const basePrice = (0.21 * distance);
    let finalPrice;
    
    console.log(nameSurname);
    console.log(distance);
    console.log(age);

    if (age === 'select' || nameSurname === ''){
        alert('devi inserire dei valori!')
    } else {
        if(age === 'minor'){
            finalPrice = (basePrice - (basePrice * 20 / 100)).toFixed(2);
        } else if (age === 'over65'){
            finalPrice = (basePrice - (basePrice * 40 / 100)).toFixed(2);
        } else {
            finalPrice = basePrice.toFixed(2);
        }
    }
        
})