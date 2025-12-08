// Exercise 1:
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Exercise 2:
for (let i = 0; i < 10; i++) {
  console.log(i ** 2);
}

// Exercise 3:
for (let i = 10; i <= 98; i = i + 2) {
  console.log(i);
}

// Exercise 4:
let myNumber = +prompt("Iveskite skaiciu:");

for (let i = 1; i <= myNumber; i++) {
  console.log(i);
}

// Exercise 5:
let myNumber1 = +prompt("Iveskite skaiciu:");
let myNumber2 = +prompt("Iveskite skaiciu:");

for (let i = myNumber1; i <= myNumber2; i++) {
  console.log(i);
}

// Exercise 6:
let nameCount = +prompt("Iveskite skaiciu:");
let myName = "Augustina";

for (let i = 0; i < nameCount; i++) {
  console.log(myName);
}

// Exercise 7:
let daugyba = +prompt("Iveskite skaiciu:");

for (let i = 1; i <= 10; i++) {
  console.log(`${daugyba} * ${i} = ${daugyba * i}`);
}

// Exercise 8:
// Parašykite programą, skaičiuojančią funkcijos y = 7x2 + 5x – 3 reikšmes, kai x kinta [-10; 10].
for (let i = -10; i <= 10; i++) {
  let y = 7 * i ** 2 + 5 * i - 3;
  console.log(`Kai x = ${i}, tai y = ${y}`);
}

// Exercise 9:

