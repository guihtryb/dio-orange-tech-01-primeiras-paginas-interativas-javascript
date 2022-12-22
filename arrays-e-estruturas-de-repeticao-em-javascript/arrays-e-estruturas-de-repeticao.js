const notas = [10, 10, 8];

console.log(notas.length); // 3
console.log(notas[0]); // 10
console.log(notas[2]); // 8
console.log(notas[5]); // undefined

notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3];

let somaWithLoop = 0;

for (let index = 0; index < notas.length; index += 1) {
  somaWithLoop += notas[index];
}

console.log(somaWithLoop, '<--->', soma); // 33 <--> 33