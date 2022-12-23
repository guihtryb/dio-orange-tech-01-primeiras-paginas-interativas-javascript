//  1 - Crie um programa que dado um número imprima sua tabuada

function getNumberMultiplicationTable(number) {
  for (let index = 0; index <= number; index += 1) {
    console.log(index, ' X ', number, '= ', index * number);
  }
}
getNumberMultiplicationTable(2)

//  2 - Crie um programa que dado uma lista de números imprima seus números pares
function getEvenNumber(number) {
  if (number % 2 === 0) console.log(number);;
}

function getEvenNumbers(numbersList) {
console.time('loop 1');
  for (let index = 0; index < numbersList.length; index++) {
    getEvenNumber(numbersList[index]);
  }
console.timeEnd('loop 1');

console.time('loop 2');
numbersList.forEach(getEvenNumber)
console.timeEnd('loop 2');
}


getEvenNumbers([10, 5, 52]);