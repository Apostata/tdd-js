export default class FizzBuzz {
  divisibleBy = [3, 5];

  constructor(valor) {
    this.isFizzBuzz = this.divisibleBy.map((divisor) => {
      let string = '';
      if (valor % divisor === 0) {
        if (divisor === 5) {
          string = 'Buzz';
        } else {
          string = 'Fizz';
        }
      }
      return string;
    }).join('');

    if (this.isFizzBuzz === '') this.isFizzBuzz = valor;
  }
}
