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
    const distance = parseInt(document.getElementById('distance').value);
    const age = document.getElementById('age').value;
    const basePrice = (0.21 * distance);
    const ticket = document.getElementById('ticket');
    let finalPrice;

    if (age === 'select' || nameSurname === '' || isNaN(distance)){
        alert('devi inserire dei valori corretti!');
        document.getElementById('namesurname').value = '';
        document.getElementById('distance').value = '';
        document.getElementById('age').value = 'select';
    } else {
        if(age === 'minor'){
            finalPrice = (basePrice - (basePrice * 20 / 100)).toFixed(2);
            ticket.classList.toggle("d-none");
            document.querySelector('.rate').innerHTML = 'Scontato del 20%';
            document.querySelector('.price').innerHTML = finalPrice + " €";
        } else if (age === 'over65'){
            finalPrice = (basePrice - (basePrice * 40 / 100)).toFixed(2);
            ticket.classList.toggle("d-none");
            document.querySelector('.rate').innerHTML = 'Scontato del 40%';
            document.querySelector('.price').innerHTML = finalPrice + " €";
        } else {
            finalPrice = basePrice.toFixed(2);
            ticket.classList.toggle("d-none");
            document.querySelector('.rate').innerHTML = 'Biglietto standard';
            document.querySelector('.price').innerHTML = finalPrice + " €";
        }
    }

    document.querySelector('.row > div > p').innerHTML = nameSurname;
    document.querySelector('.carriage').innerHTML = (Math.floor(Math.random() * 10) + 1);
    document.querySelector('.cp').innerHTML = (Math.floor(Math.random() * 10000) + 1);
         
})

resetButton.addEventListener('click', function(){
    const ticket = document.getElementById('ticket');

    document.getElementById('namesurname').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('age').value = 'select';

    ticket.classList.add("d-none");
    
})