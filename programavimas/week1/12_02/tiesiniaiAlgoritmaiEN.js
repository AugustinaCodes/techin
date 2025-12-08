// exercise 1:
console.log("--------EXERCISE 1--------");

const firstName = "Augustina"
const lastName = "Baltrusaityte"

console.log(firstName + " " + lastName);

// exercise 2:
console.log("--------EXERCISE 2--------");

console.log("Hello world!");
console.log("And all the people of the world");

// exercise 3:
console.log("--------EXERCISE 3--------");

console.log("    *");
console.log("   ***");
console.log("  *****");
console.log(" *******");
console.log("*********");
console.log("    *");

// exercise 5:
console.log("--------EXERCISE 5--------");

const daysInAYear = 365;
const hoursInADay = 24;
const minutesInAnHour = 60;
const secondsInAMinute = 60;
const answer = secondsInAMinute * minutesInAnHour * hoursInADay * daysInAYear;

console.log(`There are ${answer} seconds in a year`);

// exercise 6:
console.log("--------EXERCISE 6--------");

let a = 5;
let b = 4;

let sum = a + b;
console.log(`${a} + ${b} = ${sum}`);

// exercise 7:
console.log("--------EXERCISE 7--------");

let c = 2;
let d = 8;

let sum2 = c * d;
console.log(`${c} * ${d} = ${sum2}`);

// exercise 8:
console.log("--------EXERCISE 8--------");

let firstNumber = +prompt("Type a number:")
let secondNumber = +prompt("Type another number:")

let sum3 = firstNumber + secondNumber;

console.log(`Sum of the numbers: ${sum3}`)

// exercise 9:
console.log("--------EXERCISE 9--------");

let firstNumber9 = prompt("Type a number:")
let secondNumber9 = prompt("Type another number:")

let sum4 = parseInt(firstNumber9) / parseInt(secondNumber9);

console.log(`Division: ${sum4}`)

// exercise 10:
console.log("--------EXERCISE 10--------");

const pi = 3.14;
const radius = prompt("Type the radius:")
const circleCimcumference = 2 * pi * radius;
console.log(`Circumference of the circle: ${circleCimcumference}`);

// exercise 11:
console.log("--------EXERCISE 11--------");

let firstNumber11 = prompt("Type a number:")
let secondNumber11 = prompt("Type another number:")

let answer3 = Math.max(firstNumber11, secondNumber11)

console.log(`The bigger number of the two numbers given was: ${answer3}`)

// exercise 12:
console.log("--------EXERCISE 12--------");

let name = prompt("Type your name:")
let age = prompt("Type your age:")
let name2 = prompt("Type your name:")
let age2 = prompt("Type your age:")

let sum5 = parseInt(age) + parseInt(age2)
console.log(`${name} and ${name2} are ${sum5} years old in total.`);
