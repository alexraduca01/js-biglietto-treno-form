// Scrivere un programma che chieda all’utente:
// - Nome e cognome del passeggero
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

const nameSurname = document.getElementById('namesurname').value;
const distance = document.getElementById('distance').value;
const age = document.getElementById('age').value;
const generateButton = document.querySelector('.btn-success');
const resetButton = document.querySelector('.btn-danger');

