/**
 * const array = [1, 2, 3, 4, 5];
 
Atspausdinti, ar masyve yra skaičius 2, rezultatas turi būti boolean (true, false).
 */

const array = [1, 2, 3, 4, 5];

let number = 2;

for (let i = 0; i < array.length; i++) {
  if (number === array[i]) {
    let answer = true;
    console.log(answer);
  }
}

// funkcija:

const array1 = [1, 2, 3, 4, 5];

function findNumberTwo(array) {
  let number2 = 2;
  for (let i = 0; i < array.length; i++) {
    if (number2 === array[i]) {
      return true;
    }
    return false;
  }
}

console.log(findNumberTwo(array1));

// 

const numbers = [1, 2, 3]

console.log(sum(...numbers));

