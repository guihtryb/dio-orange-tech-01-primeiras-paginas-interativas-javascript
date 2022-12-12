// Variáveis: espaços na memória usados para armazenar um valor.

let variavelLet = 'alterável';
const constante = 'constante';

variavelLet = 'Outro valor';
// constante = 'TypeError';


// Desafio 1 - Operações Aritméticas

// Programa que calcule o valor gasto de combustível em uma viagem, utilizando 3 variáveis: Preço do combustivel, Valor médio de gasto do carro e Distância em KM da viagem
// Imprima no console o valor que será gasto de combustível para realizar esta viagem;

const fuelPrice = 5.79;
const KilometerPerLiters = 12;
const distanceKilometer = 1580;

const litersSpent = (distanceKilometer / KilometerPerLiters);

const totalTravelSpent = litersSpent * fuelPrice;

console.log(totalTravelSpent.toFixed(2));