const randomNumber = Math.random(),
  rn2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert(`random number 1 was greater than 0.7 it was ${randomNumber}`);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const n of numbers) {
  console.log(n);
}

for (let i = numbers.length; i > 0; i--) {
  console.log(numbers[i - 1]);
}

if (randomNumber >= 0.7 && rn2 >= 0.7 || rn2 <= 0.2 || randomNumber <= 0.2) {
  alert(`random number 1 and 2 are greater than 0.7 or one of them is smaller than 0.2 the numbers are
  random number 1: ${randomNumber}
  random number 2: ${rn2}`)
}