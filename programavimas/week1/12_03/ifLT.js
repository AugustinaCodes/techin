// exercise 1:
/**
 * Žinoma, kad iš skaičiaus sk galima ištraukti kvadratinę šaknį jeigu skaičius yra neneigiamas (sk≥0).
Parašykite programą, kuri ištraukia kvadratinę šaknį iš duotojo skaičiaus sk.
-----------------------------------------------------------
Įvesta: 36
Gauta: 6
-----------------------------------------------------------
Įvesta: 13
Gauta: 3.605551275463989
-----------------------------------------------------------
Įvesta: -9
Gauta: Šaknies ištraukti negalima, nes įvestas neigiamas skaičius
 */
let sk = +prompt("Iveskite skaiciu:");

if (sk >= 0) {
  console.log(Math.sqrt(sk));
} else {
  console.log("Skanies istraukti negalima, nes ivestas neigiamas skaicius.");
}

// exercise 2:
/**
 * Parašyti programą, kuri nustatytų, ar iš n degtukų galima sudaryti kvadratą.
-----------------------------------------------------------
Įvesta: 5
Gauta: Kvadrato sudaryti negalima
-----------------------------------------------------------
Įvesta: 8
Gauta: Kvadratą sudaryti galima
 */
// divide into 4 equal parts
let n = +prompt("Iveskite skaiciu:");

if (n % 4 === 0) {
  console.log("Kvadrata sudaryti galima");
} else {
  console.log("Kvadrato sudaryti negalima");
}

// exercise 3:
/**
 * Parduotuvėje vyksta akcija, jeigu bet kurios prekės perkama daugiau nei 3 vienetai, taikoma 20 %
nuolaidą nuo bendros sumos.
Turime prekės kainą k ir perkamus vienetus vnt.
-----------------------------------------------------------
Įvesta: k = 2,44 ir vnt = 6
Gauta: Suma su nuolaida: 11.71
-----------------------------------------------------------
Įvesta: k = 2,44 ir vnt = 2
Gauta: Suma (be nuolaidos): 4.88
 */
let k = +prompt("Iveskite prekes kaina:");
let vnt = +prompt("Iveskite perkamus vienetus");
let suma = vnt * k;

if (vnt > 3) {
  let nuolaida = (suma * 20) / 100;
  console.log(`Suma su nuolaida: ${(suma - nuolaida).toFixed(2)}`);
} else {
  console.log(`Suma (be nuolaidos): ${suma}`);
}

// exercise 4:
/**
 * Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių. Į mašiną telpa m dėžių. Parašykite programą,
kuri apskaičiuotų, kiek kartų k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į
parduotuvę.
-----------------------------------------------------------
Įvesta: n = 9, m = 4
Gauta: k = 3
-----------------------------------------------------------
Įvesta: n = 8, m = 4
Gauta: k = 2
 */

let n1 = +prompt("Iveskite sandelio dezes");
let m = +prompt("Iveskite kiek deziu telpa masinoje");

if (n1 % m === 0) {
  console.log(`k = ${n1 / m}`);
} else {
  console.log(`k = ${Math.floor(n1 / m) + 1}`);
}

//exercise 5:
/**
 * Parašykite programą, kuri mokinio gautą įvertinimą pateiktu žodžiu. Puikiai – 10, Labai gerai – 9,
Gerai – 8, Vidutiniškai – 7, Reikia daugiau pastangų – 6 ir mažiau.
-----------------------------------------------------------
Įvesta: 7
Gauta: Vidutiniškai
-----------------------------------------------------------
Įvesta: 5
Gauta: Reikia daugiau pastangų
 */

let pazymys = +prompt("Iveskite pazymi");

if (pazymys === 10) {
  console.log("Puikiai");
} else if (pazymys === 9) {
  console.log("Labai gerai");
} else if (pazymys === 8) {
  console.log("Gerai");
} else if (pazymys === 7) {
  console.log("Vidutiniskai");
} else if (pazymys <= 6) {
  console.log("Reikia daugiau pastangu");
}

//exercise 6:
/**
 * Parašykite programą, kuri patikrina koks yra įvestas skaičius: neigiamas, teigiamas ar nulis.
-----------------------------------------------------------
Įvesta: 0
Gauta: Nulis
-----------------------------------------------------------
Įvesta: -99
Gauta: Neigiamas
 */

let skaicius = +prompt("Iveskite skaiciu");

if (skaicius > 0) {
  console.log("Teigiamas");
} else if (skaicius === 0) {
  console.log("Nulis");
} else if (skaicius < 0) {
  console.log("Neigiamas");
}

//exercise 7:
/**
 * Parašykite programą, kuri nustatytų kampo rūšį. Jeigu kampas lygus 90o tai statusis, jeigu 180o
–

ištiestinis, jeigu 360o

– tai pilnutinis.

-----------------------------------------------------------
Įvesta: 90
Gauta: Statusis
-----------------------------------------------------------
Įvesta: 50
Gauta: Pavadinimo nėra
-----------------------------------------------------------
Įvesta: -5
Gauta: Kampo dydis turi būti teigiamas skaičius
 */

let kampas = +prompt("Iveskite kampo skaiciu");

if (kampas === 90) {
  console.log("Statusis");
} else if (kampas === 180) {
  console.log("Istiesinis");
} else if (kampas === 360) {
  console.log("Pilnutinis");
} else if (kampas < 0) {
  console.log("Kampo dydis turi buti teigiamas skaicius");
} else {
  console.log("Pavadinimo nera");
}

// exercise 8:
/**
 * Parašykite programą, kuri patikrintų ar įvestas skaičius yra triženklis.
-----------------------------------------------------------
Įvesta: 26
Gauta: Ne
-----------------------------------------------------------
Įvesta: 154
Gauta: Taip
 */

let skaicius1 = +prompt("Iveskite skaiciu");

if (skaicius1 >= 100 && skaicius1 < 1000) {
  console.log("Taip");
} else {
  console.log("Ne");
}

// exercise 9:
/**
 * Parašykite programą, kuri nustatytų, ar iš duotų trijų atkarpų (įvedami jų ilgiai) galima sudaryti
trikampį.
-----------------------------------------------------------
Įvesta: 3, 4, 5
Gauta: Galima sudaryti trikampį
-----------------------------------------------------------
Įvesta: 3, 2, 5
Gauta: Negalima sudaryti trikampio
 */

let a = +prompt("Iveskite ilgi:");
let b = +prompt("Iveskite ilgi:");
let c = +prompt("Iveskite ilgi:");

if (a + b > c && a + c > b && b + c > a) {
  console.log("Galima sudaryti trikampi");
} else {
  console.log("Negalima sudaryti trikampio");
}

//exercise 10:
/**
 * Duoti trys skaičiai. Parašykite programą, kuri nustatytų, ar bent vienas iš jų yra lyginis.
-----------------------------------------------------------
Įvesta: 33, 56, 111
Gauta: Taip
-----------------------------------------------------------
Įvesta: 28, 56, 99
Gauta: Taip
-----------------------------------------------------------
Įvesta: 55, 3, 169
Gauta: Ne
 */

let skaicius2 = +prompt("Iveskite skaiciu:");
let skaicius3 = +prompt("Iveskite skaiciu:");
let skaicius4 = +prompt("Iveskite skaiciu:");

if (skaicius2 % 2 === 0 || skaicius3 % 2 === 0 || skaicius4 % 2 === 0) {
  console.log("Taip");
} else {
  console.log("Ne");
}

//exercise 11:
/**
 * Duoti trys skaičiai. Parašykite programą, kuri nustatytų, ar tik vienas iš jų yra didesnis už 100.
-----------------------------------------------------------
Įvesta: 101, 25, 98
Gauta: Tik vienas triženklis
-----------------------------------------------------------
Įvesta: 102, 103, 58
Gauta: Daugiau nei vienas triženklis
 */

let skaicius5 = +prompt("Iveskite skaiciu:");
let skaicius6 = +prompt("Iveskite skaiciu:");
let skaicius7 = +prompt("Iveskite skaiciu:");

if (
  (skaicius5 >= 100 && skaicius6 >= 100) ||
  (skaicius7 >= 100 && skaicius6 >= 100) ||
  (skaicius5 >= 100 && skaicius7 >= 100)
) {
  console.log("Daugiau nei vienas trizenklis");
} else if (skaicius5 >= 100 || skaicius6 >= 100 || skaicius7 >= 100) {
  console.log("Tik vienas trizenklis");
}

//exercise 12:
/**
 * Duomenys koduojami skaičiais. Saulėta – 1, lietinga – 2, vėjuota – 3, sniegas – 4. Parenkite programą,
kuri įvedus kodą, atspausdintų jo reikšmę. Naudokite sakinį switch.
-----------------------------------------------------------
Įvesta: 4
Gauta: Sniegas
-----------------------------------------------------------
Įvesta: -9
Gauta: Tokio kodo nėra
 */

let temperatura = +prompt("Iveskite skaiciu:");

switch (temperatura) {
  case 1:
    console.log("Sauleta");
    break;
  case 2:
    console.log("lietinga");
    break;
  case 3:
    console.log("vejuota");
    break;
  case 4:
    console.log("sniegas");
    break;
  default:
    console.log("Tokio kodo nera");
    break;
}

//exercise 13:
/**
 * Parenkite programą, kuri įvedus mėnesio numerį metuose, nustatytų koks tai metų laikas: vasara,
ruduo, žiema, pavasaris.
-----------------------------------------------------------
Įvesta: 5
Gauta: Gegužė
-----------------------------------------------------------
Įvesta: 13
Gauta: Tokio mėnesio nėra
 */

let menesis = +prompt("Iveskite menesio numeri:");

if (menesis === 12 || (menesis >= 1 && menesis <= 2)) {
  console.log("Ziema");
} else if (menesis >= 3 && menesis <= 5) {
  console.log("Pavasaris");
} else if (menesis >= 6 && menesis <= 8) {
  console.log("Vasara");
} else if (menesis >= 9 && menesis <= 11) {
  console.log("Ruduo");
} else {
  console.log("Tokio menesio nera");
}

// exercise 14:
/**
 * Parenkite programą – skaičiuotuvas, kuri įvedus du skaičius ir operacijos simbolį, atlieką nurodytą
veiksmą.
-----------------------------------------------------------
Įvesta: 2, 3, +
Gauta: 2 + 3 = 5
-----------------------------------------------------------
Įvesta: 8, 9, *
Gauta: 8 * 9 = 72
 */

let skaicius8 = +prompt("Iveskite skaiciu:");
let skaicius9 = +prompt("Iveskite skaiciu:");
let operand = prompt("Iveskite operacijos simboli:");

if (operand === "+") {
  console.log(`${skaicius8} + ${skaicius9} = ${skaicius8 + skaicius9}`);
} else if (operand === "-") {
  console.log(`${skaicius8} - ${skaicius9} = ${skaicius8 - skaicius9}`);
} else if (operand === "*") {
  console.log(`${skaicius8} * ${skaicius9} = ${skaicius8 * skaicius9}`);
} else if (operand === "/") {
  console.log(`${skaicius8} / ${skaicius9} = ${skaicius8 / skaicius9}`);
}
