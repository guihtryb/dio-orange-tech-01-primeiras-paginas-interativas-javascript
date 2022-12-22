/*
  1 - Crie uma classe para representar carros.
  Os carro possuem uma marca, cor, e um gasto médio de
  combustível por KM rodado.
  Crie um método que dado a quantidade de KM e o preço
  do combustível nos dê o valor gasto em reais para
  realizar este percurso.
*/

class Car {
  brand;
  color;
  fuelSpentPerKm;

  constructor(
    carBrand,
    carColor,
    carFuelSpentPerKm
  ) {
    this.brand = carBrand;
    this.color = carColor;
    this.fuelSpentPerKM = carFuelSpentPerKm;
  }

  getSpentInTravel(travelDistanceInKm, fuelPrice) {
    return (travelDistanceInKm * this.fuelSpentPerKm) * fuelPrice;
  }
}

/*
  2) Crie uma classe para representar pessoas.
  Para cada pessoas teremos um nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC.
  Instâncie uma pessoa chamada José que tenha 70kg e 1.75m e peça para José dizer seu IMC
*/

class Person {
  _name;
  _weight;
  _height;

  imc_dict = {
    thresholds: [18.5, 25, 30, 40],
    classification: ['Abaixo do peso.', 'Peso normal.', 'Acima do peso.', 'Obeso.']
  }

  constructor(name, weight, height) {
    this._name = name;
    this._weight = weight;
    this._height = height;
  }

  getIMC() {
    return this._weight / (this._height * this._height)
  }

  classificateIMC() {
    const imcThresholds = this.imc_dict.thresholds;
    const imcClassification = this.imc_dict.classification;

    for(let index = 0; index < imcThresholds.length; index += 1) {
      if (this.getIMC() < imcThresholds[index]) {
        return imcClassification[index];
      }
    }

    return 'Obesidade Grave.'
  }

  sayIMC() {
    return `${this._name}: "O valor do meu IMC é ${this.getIMC().toFixed(2)}, classificado como: ${this.classificateIMC()}"`;
  }
}

const jose = new Person('José', 100, 1.75);
console.log(jose.sayIMC());
