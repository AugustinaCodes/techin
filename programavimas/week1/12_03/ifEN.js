// exercise 14:
let number = +prompt("Type a number:");

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

// exercise 15:
let age = +prompt("How old are you?");

if (age >= 18) {
  console.log("You have reached the age of majority!");
} else {
  console.log("You have not reached the age of majority yet!");
}

// exercise 16:
let number1 = +prompt("Type a number:");

if (number1 % 2 === 0) {
  console.log(`Number ${number1} is even`);
} else {
  console.log(`Number ${number1} is odd`);
}

// exercise 17:
let number2 = +prompt("Type the first number:");
let number3 = +prompt("Type the second number:");

if (number2 > number3) {
  console.log(`Greater number ${number2}`);
} else if (number2 < number3) {
  console.log(`Greater number ${number3}`);
} else {
  console.log("The numbers are equal!");
}

// exercise 18:
let grade = +prompt("Type the points [0-60]");

if (grade <= 29) {
  console.log("failed");
} else if (grade <= 34) {
  console.log("1");
} else if (grade <= 39) {
  console.log("2");
} else if (grade <= 44) {
  console.log("3");
} else if (grade <= 49) {
  console.log("4");
} else if (grade <= 60) {
  console.log("5");
}

// exercise 19:
let age1 = +prompt("How old are you?");

if (age1 >= 0 && age1 <= 120) {
  console.log("OK");
} else {
  console.log("Impossible!");
}

// exercise 20:
let username = prompt("Type your username:");
let password = prompt("Type your password:");

if (
  (username === "alex" && password === "mightyducks") ||
  (username === "emily" && password === "cat")
) {
  console.log("You are now logged into the system!");
} else {
  console.log("Your username or password was invalid!");
}

// exercise 21:
let year = +prompt("Type a year:");

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("The year is a leap year");
} else {
  console.log("The year is not a leap year");
}
