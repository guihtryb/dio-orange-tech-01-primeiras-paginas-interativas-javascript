// Exemplo 1

const number1 = 6;
const isEvenNumber = (number1 % 2) === 0;

// "==" ignora o tipo das variáveis ao comparar
// "===" leva em conta o tipo das variáveis ao comparar

if (isEvenNumber) {
  console.log('É par');
} else {
  console.log('É impar');
}

// Desafio 2

// Faça um programa que calcule o valor gasto de combustível em uma viagem, utilizando 5 variáveis:
// 1 - Preço do etanol
// 2 - Preço da gasolina
// 3 - Tipo de combustível do carro
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM de Viagem

// Imprima no console o valor que será gasto de combustível para realizar esta viagem;

const ethanolPrice = 5.79;
const gasolinePrice = 6.66;
const isFuelGasoline = false;
const spentPerKM =  10;
const kilometerDistance = 100;

const totalFuelSpent = kilometerDistance / spentPerKM;

let totalTravelSpent = 0;

if (isFuelGasoline) {
  totalTravelSpent = gasolinePrice * totalFuelSpent;
} else {
  totalTravelSpent = ethanolPrice * totalFuelSpent;
}

  console.log(totalTravelSpent.toFixed(2));
