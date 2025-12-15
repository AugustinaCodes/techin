// exercise 1:
console.log("--------EXERCISE 1--------");

let a = prompt("Iveskite krastine a:");
let b = prompt("Iveskite krastine b:");
let c = prompt("Iveskite krastine c:");

let perimetras = parseInt(a) + parseInt(b) + parseInt(c);
console.log(`Trikampio perimetras: ${perimetras}`);

// exercise 2:
console.log("--------EXERCISE 2--------");

let pirmas = prompt("Iveskite skaiciu:");
let antras = prompt("Iveskite skaiciu:");

let answer = 180 - parseInt(pirmas) - parseInt(antras);
console.log(`Gauta: ${answer}`);

// exercise 3:
console.log("--------EXERCISE 3--------");

let km = prompt("Iveskite km:");
let m = 1000 * parseInt(km);
console.log(`Answer is: ${m}`);

// exercise 4:
console.log("--------EXERCISE 4--------");

let km2 = prompt("Iveskite km:");
let m2 = prompt("Iveskite m:");
let answer2 = 1000 * parseInt(km2) + parseInt(m2);
console.log(`Answer: ${answer2}`);

// exercise 5:
console.log("--------EXERCISE 5--------");

let val = 18;
let valPerDiena = 24;
let dienosPerSav = 7;

console.log(
  `per diena: ${val * valPerDiena}, per savaite: ${
    val * valPerDiena * dienosPerSav
  }`
);

// exercise 6:
console.log("--------EXERCISE 6--------");

let dienos = prompt("Iveskite dienas:");
let savaites = parseInt(dienos) / 7;

console.log(`Gata: ${Math.floor(savaites)} savaite`);

// exercise 7:
console.log("--------EXERCISE 7--------");

let n = prompt("Iveskite n:");
let m3 = prompt("Iveskite m:");
let s = parseInt(m3) / parseInt(n);
let k = parseInt(m3) % parseInt(n);

console.log(`s = ${Math.floor(s)}, k = ${k}`);

// exercise 8:
console.log("--------EXERCISE 8--------");

let ct = prompt("Iveskite centus:");
let eg = Math.floor(parseInt(ct) / 100);
let ctg = parseInt(ct) % 100;

console.log(`Gauta: ${eg} Eur ir ${ctg} ct`);

// exercise 9:
console.log("--------EXERCISE 9--------");

let h = +prompt("Iveskite valandas:");
let min = +prompt("Iveskite minutes:");
let truk = +prompt("Iveskite trukme:");

let visasLaikas = h * 60 + min + truk;

let h1 = Math.floor(visasLaikas / 60);
let min1 = visasLaikas % 60;

console.log(`Lektuvas nusileis: h1 = ${h1} , min1 = ${min1}`);

// exercise 10:
console.log("--------EXERCISE 10--------");

let filmash = +prompt("Iveskite filmo pradzia h:");
let filmasmin = +prompt("Iveskite filmo pradzia min:");
let trukmeh = +prompt("Iveskite filmo trukme h:");
let trukmemin = +prompt("Iveskite filmo trukme min:");
let reklamos = 30;

let filmoLaikas = filmash * 60 + filmasmin;
let trukme = trukmeh * 60 + trukmemin;

let visaTrukme = filmoLaikas + trukme + reklamos;

let filmoPabaigah = Math.floor(visaTrukme / 60);
let filmoPabaigamin = visaTrukme % 60;

console.log(`Filmas pasibaigs: ${filmoPabaigah}:${filmoPabaigamin}`);

//  exercise 11:
console.log("--------EXERCISE 11--------");

let valandos = +prompt("Iveskite valandas:");
let minutes = +prompt("Iveskite minutes:");
let sekundes = +prompt("Iveskite sekundes:");

let valandosSekundemis = valandos * 3600;
let minutesSekundemis = minutes * 60;

let visasLaikas1 = valandosSekundemis + minutesSekundemis + sekundes + 5;
let valandosPo = Math.floor(visasLaikas1 / 3600);
let minutesPo = Math.floor((visasLaikas1 - valandosSekundemis) / 60);
let sekundesPo = visasLaikas1 % 60;

console.log(`Laikas: ${valandosPo}:${minutesPo}:${sekundesPo}`);
