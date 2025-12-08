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
let interval1 = +prompt("Iveskite intervalo pradzia:");
let interval2 = +prompt("Iveskite intervalo pabaiga:");
let count = 0;

for (let i = interval1; i <= interval2; i++) {
  if (i % 6 === 0) {
    count++;
  }
}
console.log(`Reikalingu marskineliu skaicius: ${count}`);

// Exercise 10:
let eglute = +prompt("Kiek egluciu atvezta?");
let sum = 0;
let eglutesAukstis = 0;

for (let i = 1; i <= eglute; i++) {
  eglutesAukstis = +prompt(`Iveskite ${i} eglutes auksti:`);
  sum += eglutesAukstis;
}

console.log(`Eglutes aukscio vidurkis: ${sum / eglute} cm`);

//noprotect

// Exercise 11:
/**
 * 
Keturženklis skaičius x vadinamas laimingu, jei jo pirmųjų dviejų skaitmenų ir paskutiniųjų
dviejų skaitmenų sumos kvadratas yra lygus x.
Parašykite programą, kuri ekrane atspausdintų keturženklių skaičių iš intervalo [a; b] laimingus
skaičius.
-----------------------------------------------------------
Įvesta: a = 1000, b = 5000
Gauta: 2025 3025

So, (20 + 25)^2 = 2025
(30 + 25)^2 = 3025
Find the lucky numbers between the given range!
 */
let myNumber3 = +prompt("Iveskite skaiciu:");
let myNumber4 = +prompt("Iveskite skaiciu:");

for (let i = myNumber3; i <= myNumber4; i++) {
  let beginning = Math.trunc(i / 100);
  let ending = i % 100;
  if ((beginning + ending) ** 2 === i) {
    console.log(i);
  }
}
