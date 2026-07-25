'use strict';

const inputNumber = document.querySelector('.input__number');
let testButton = document.querySelector('.test__button');
const check = document.querySelector('.check');
let acc = document.querySelector('.acc')
let i = 0;

// GENERAR NÚMERO ALEATORIO
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
const randomNumber = getRandomNumber(100);

// FUNCIÓN COMPRUEBA EL NÚMERO
function checkYourNumber() {
    const userNumber = parseInt(inputNumber.value);
    console.log('Número usuario', userNumber);
    console.log('Número random', randomNumber);
    
    if (randomNumber === userNumber) {
        check.innerHTML = '¡HAS GANADO CAMPEONA!';
    } else if (userNumber < randomNumber) {
        check.innerHTML = 'Demasiado bajo';
        i = i+1; // CONTADOR DE INTENTOS
        acc.innerHTML = i;
    } else if (userNumber > randomNumber) {
        check.innerHTML = 'Demasiado alto';
        i = i+1; // CONTADOR DE INTENTOS
        acc.innerHTML = i;
    }
};

testButton.addEventListener('click', checkYourNumber);