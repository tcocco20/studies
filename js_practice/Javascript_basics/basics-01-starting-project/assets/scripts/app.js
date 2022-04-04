const defaultResult = 0;
let currentResult = defaultResult;

currentResult = currentResult + (10 * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10)  * 3 / 2 - 1`;

add = (x, y) => {
  result = x + y;
  alert('The result is: ' + result)
}

add(5, 6);

outputResult(currentResult, calculationDescription);
