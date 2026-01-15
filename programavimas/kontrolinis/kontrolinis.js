//--------------------EXERCISE 1--------------------
/**
 * Skaičių spausdinimas Parašykite programą, kuri atspausdina visus skaičius iš intervalo [a; b]. Skaičius a ir b turi įvesti vartotojas. 1. Su ciklu for. 2. Su ciklu while. 3. Su ciklu do…while.

Kontroliniai duomenys:
Įvesta: 100, 105 Gauta: 100, 101, 102, 103, 104, 105.
 */

let number1 = +prompt("Enter a number:");
let number2 = +prompt("Enter a number:");

// For ciklas:

for (let i = number1; i <= number2; i++) {
  console.log(i);
}

// While ciklas:

while (number1 <= number2) {
  console.log(number1);
  number1++;
}

// do while ciklas:
do {
  console.log(number1);
  number1++;
} while (number1 <= number2);

//--------------------EXERCISE 2--------------------
/**
 * Skaičių spausdinimas ir papildomos sąlygos Parašykite programą, kuri paprašytų vartotojo įvesti du sveikus skaičius: a ir b. Programa turi išvesti visus nelyginius sveikus skaičius nuo a iki b imtinai. Jei skaičius a yra mažesnis už skaičių b, skaičiai turi būti išvedami didėjimo tvarka, o jei a yra didesnis už b, skaičiai turi būti išvedami mažėjimo tvarka. Programa turi veikti ir su neigiamais skaičiais.
 */

let a = +prompt("Enter a number:");
let b = +prompt("Enter a number:");

if (a < b) {
  for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} else if (a > b) {
  for (let i = a; i >= b; i--) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

//--------------------EXERCISE 3--------------------
/**
 * Lietuvos gyventojų duomenų registre gyventojų asmens kodo duomenys laikomi tokiu formatu SYYMMDDXXXX, kur:
S – lytis: 3 (vyras, 1900 – 1999), 4 (moteris, 1900 – 1999), 5 (vyras, 2000-), 6 (moteris, 2000-);
YY – gimimo metų paskutiniai du skaitmenys (00, 01, 02, 03, ..., 98, 99);
MM – gimimo mėnesio numeris (01, 02, 03, ..., 11, 12);
DD – gimimo dienos numeris (01, 02, 03, ..., 29, 30, 31);
XXXX – registracijos numeris (0001 ... 9999).

Reikalavimai: Įvedus asmens kodą, programa turi:
· Nustatyti lyties pavadinimą (pvz., „Vyras“ arba „Moteris“).
· Nustatyti, kuriame amžiuje gimė asmuo (pvz., 3 ir 4 – XX, 5 ir 6 – XXI).
· Nustatyti gimimo mėnesio pavadinimą (pvz., „Sausis“, „Vasaris“ ir t. t.).
· Sukurti objektą: {pvz.: lytis: „Moteris, amžius: „XIX“, gimimoMenuo: „Vasaris“}.
 */

const asmensKodas = prompt("Iveskite asmnes koda:");
const toArray = [...asmensKodas];

function findOutGender(array) {
  let gender;
  if (array[0] == 3 || array[0] == 5) {
    gender = "Vyras";
    return gender;
  } else if (array[0] == 4 || array[0] == 6) {
    gender = "Moteris";
    return gender;
  }
}

function findOutCentury(array) {
  let century;
  if (array[0] == 3 || array[0] == 4) {
    century = "XX";
    return century;
  } else if (array[0] == 5 || array[0] == 6) {
    century = "XXI";
    return century;
  }
}

function findOutBirthMonth(array) {
  let month;
  const birthMonth = array.slice(3, 5).join("");
  switch (birthMonth) {
    case "01":
      month = "Sausis";
      return month;
    case "02":
      month = "Vasaris";
      return month;
    case "03":
      month = "Kovas";
      return month;
    case "04":
      month = "Balandis";
      return month;
    case "05":
      month = "Geguze";
      return month;
    case "06":
      month = "Birzelis";
      return month;
    case "07":
      month = "Liepa";
      return month;
    case "08":
      month = "Rugpjutis";
      return month;
    case "09":
      month = "Rugsejis";
      return month;
    case "10":
      month = "Spalis";
      return month;
    case "11":
      month = "Lapkritis";
      return month;
    case "12":
      month = "Gruodis";
      return month;
  }
}

console.log(findOutGender(toArray));
console.log(findOutCentury(toArray));
console.log(findOutBirthMonth(toArray));

function Person(gender, century, birthMonth) {
  this.gender = gender;
  this.century = century;
  this.birthMonth = birthMonth;
}

const person1 = new Person(
  findOutGender(toArray),
  findOutCentury(toArray),
  findOutBirthMonth(toArray)
);

console.log(person1);

//--------------------EXERCISE 4--------------------
/**
 * Olimpiadoje dalyvavo n programuotojų. Pirmasis programuotojas išsprendė u1, antrasis – u2 ir t.t. uždavinių.
Užduoties reikalavimai:
· Duomenų saugojimas: Naudokite masyvą pradiniams duomenims kaupti.
· Atsitiktinių reikšmių generavimas: Sukurkite funkciją, kuri užpildytų masyvą atsitiktiniais skaičiais iš intervalo [1; 15].
· Dalyvių skaičius:
Sukurkite funkciją, kuri atspausdina dalyvių skaičių.
· Bendras uždavinių skaičius: Sukurkite funkciją, kuri apskaičiuotų, kiek iš viso uždavinių išsprendė olimpiadoje dalyvavę programuotojai.
· Vidurkio skaičiavimas: Sukurkite funkciją, kuri nustatytų, kiek vidutiniškai uždavinių išsprendė vienas varžybų dalyvis.
· Dalyvių filtravimas: Sukurkite funkciją, kuri suskaičiuotų, kiek mokinių išsprendė daugiau nei 5 uždavinius.
 */

let n = +prompt("How many student participated in the Olympiad?");
let results = [];

function howManyTasksCompleted(n) {
  let u = +prompt("How many tasks did they complete?");
  for (let i = 1; i <= n; i++) {
    results.push(u);
    u = +prompt("How many tasks did they complete?");
  }
  return results;
}

function participantNumber(number) {
  return `There were ${number} participants in the olympiad`;
}

function totalTasksCompleted(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return `Students completed ${sum} tasks in total`;
}

function averageTasksCompleted(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  let average = sum / array.length;
  return `Average number of tasks completed is ${average.toFixed(2)}`;
}

function filterStudents(array) {
  let filter = array.filter((number) => number > 5);
  return `${filter.length} students completed more than 5 tasks`;
}

console.log(howManyTasksCompleted(n));
console.log(participantNumber(n));
console.log(totalTasksCompleted(results));
console.log(averageTasksCompleted(results));
console.log(filterStudents(results));

//--------------------EXERCISE 5--------------------
// Daugybos lentelė iki 15 😊

let multiplicationTableNumber = +prompt(
  "Enter number for multiplication table:"
);

function multiplicationTable(number) {
  console.log("___________________________________");
  for (let i = 1; i <= number; i++) {
    let row = "";
    for (let j = 1; j <= number; j++) {
      row += " " + i * j;
    }
    console.log(row);
  }

  console.log("___________________________________");
}

multiplicationTable(multiplicationTableNumber);
