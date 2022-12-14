// Funções: trechos de código em que podemos invocar sua execuação a qualquer momento.

// sintaxe:
function myFunction() {
  console.log('minha função');
}

// Invocando a função;
myFunction();

// Função com parametrôs:
// Obs: esta é uma "pure function", pois sempre retornará o mesmo resultado dados os mesmos argumentos

// Funções que não possuem retorno, são chamadas também de procedimentos em algumas linguagens
function yourFavoriteSport(sportName) {
  console.log('O esporte favorito dessa pessoa é:', sportName);
}

yourFavoriteSport('Basketball');

function square(number) {
  return number * number;
}

console.log(square(10));

// Refatorando o código da aula passada para funções!

// Função 1 - Calcular média das notas:
function calcGradesAverage(gradesArray) {
  for (let index = 0; index < gradesArray.length; index += 1) {
    if (typeof gradesArray[index] !== 'number') {
      throw Error('TypeError: insira valores do tipo "number"')
    }
  }

  let totalPoints = 0;

  for (let gradesArrayIndex = 0; gradesArrayIndex < gradesArray.length; gradesArrayIndex += 1) {
    totalPoints += gradesArray[gradesArrayIndex];
  }

  return totalPoints / gradesArray.length;
}
function classificateGradesAverage(average) {
  let status = '';

  if (average < 5) {
      status = 'REPROVADO';
  } else if (average <= 7) {
    status = 'RECUPERAÇÃO';
  } else {
    status = 'APROVADO';
  }

  return status;
}

calcGrades([10, 4, 10]);

// Função 2 - Cálculo IMC:
function calcIMC(height, weight) {
  const imc = weight / (height * height);
  return imc;
}

function classificateImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso.';
  } else if (imc < 25) {
    return 'Peso normal.';
  } else if (imc < 30) {
    return 'Acima do peso.';
  } else if (imc < 40) {
    return 'Obeso.';
  } else {
    return 'Obesidade Grave';
  }
}

// Função 3 - Calcular valor a ser pago por um produto considerando preço normal e etiqueta da condição de pagamento
function calcProductPrice(productPrice, method) {
  const [
    debitMethod,
    cashOrPixMethod,
    twoInstallments,
    moreThanTwoInstallments
  ] = [0.9, 0.85, 1, 1.1];

  let priceToPay = 0;

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
}

calcProductPrice(1000, 2);