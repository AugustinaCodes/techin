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
