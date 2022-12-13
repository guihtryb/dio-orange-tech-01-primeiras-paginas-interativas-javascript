// Desafio 1 - Média das notas
const notas = [10, 9, 10];

const media = (notas[0] + notas[1] + notas[2]) / notas.length;

let classificacao = '';

if (media < 5) {
  classificacao = 'REPROVADO';
} else if (media <= 7) {
  classificacao = 'RECUPERAÇÃO';
} else {
  classificacao = 'APROVADO';
}

console.log('Média: ', media.toFixed(2), 'Classificação: ', classificacao);

// Desafio 2 - cálculo IMC
const height = 1.88;
const weight = 68;

const imc = weight / (Math.pow(height, 2));

if (imc < 18.5) {
  console.log('Abaixo do peso.');
} else if (imc < 25) {
  console.log('Peso normal.');
} else if (imc < 30) {
  console.log('Acima do peso.');
} else if (imc < 40) {
  console.log('Obeso.');
} else {
  console.log('Obesidade Grave');
}

// Desafio 3 - O que deve se pago por um produto considerando preço normal e etiqueta da condição de pagamento

const productPrice = 100;
const method = 1;
const debitMethod = 0.9;
const cashOrPixMethod = 0.85;
const twoInstallments = 1;
const moreThanTwoInstallments = 1.1;

let priceToPay = 0

switch (method) {
  case 1:
    priceToPay = debitMethod * productPrice;
    console.log('Valor a ser pago: R$', priceToPay.toFixed(2));
    break;
  case 2:
    priceToPay = cashOrPixMethod * productPrice;
    console.log('Valor a ser pago: R$', priceToPay.toFixed(2));
    break;
  case 3:
    priceToPay = cashOrPixMethod * productPrice;
    console.log('Valor a ser pago: R$', priceToPay.toFixed(2));
    break;
  case 4:
    priceToPay = twoInstallments * productPrice;
    console.log('Valor a ser pago: R$', priceToPay.toFixed(2));
    break;
  default:
    priceToPay = moreThanTwoInstallments * productPrice;
    console.log('Valor a ser pago: R$', priceToPay.toFixed(2));
  }
