// exercise 1:
/**
 * Create a program that prints the integers (whole numbers) from 1 to 100.  
The program output should be:  
1  
2  
3  
(many rows of numbers here)  
98  
99  
100  
 */

let i = 1;
while (i < 101) {
  console.log(i);
  i++;
}

//exercise 2:
/**
 * Create a program that prints the integers (whole numbers) from 100 to 1.  
The program output should be:
100  
99  
98  
(many rows of numbers here)  
3  
2  
1 
 */

let i1 = 100;
while (i1 >= 1) {
  console.log(i1);
  i1--;
}

//exercise 3:
/**
 * Create a program that prints all even numbers between 2 and 100.  
2  
4  
6  
(many rows of numbers here)  
96  
98  
100 
 */

let i2 = 2;
while (i2 <= 100) {
  console.log(i2);
  i2 += 2;
}

//exercise 4:
/**
 * Create a program that prints all whole numbers from 1 to the number the user enters.  
Up to what number? 3
1  
2  
3  
 
Up to what number? 5
1  
2  
3  
4  
5 
 */

let number = +prompt("Up to what number?");
let i3 = 1;

while (i3 <= number) {
  console.log(i3);
  i3++;
}

//exercise 5:
/**
 * Create a program that asks the user for the first number and the last number and then prints all numbers  between those two.  
First: 5
Last: 8
5  
6  
7  
8  
 
If the first number is greater than the last number, the program prints nothing:  
First: 16
Last: 12
 */

let number1 = +prompt("First:");
let number2 = +prompt("Last:");
while (number1 <= number2) {
  console.log(number1);
  number1++;
}

// exercise 6:
/**
 * Create a program that calculates the sum 1+2+3+…+n where n is a number entered by the user.  Example outputs:  
Until what? 3
Sum is 6  
The calculation above was: 1+2+3 = 6.  
Until what? 7
Sum is 28  
The calculation above was: 1+2+3+4+5+6+7 = 28.
 */

let number3 = +prompt("Unti what?");
let sum = 0;
let i4 = 0;

while (i4 <= number3) {
  sum += i4;
  i4++;
}

console.log(sum);

// exercise 7:
/**
 * Similar to the previous exercise, except that the program should ask for both the lower and upper  bound. You can assume that the users first gives the smaller number and then the greater number.  
Example outputs:  
First: 3
Last: 5
The sum 12  
 
First: 2
Last: 8
The sum is 35
 */

let number4 = +prompt("First");
let number5 = +prompt("Last");
let sum1 = 0;

while (number4 <= number5) {
  sum1 += number4;
  number4++;
}

console.log(sum1);

// exercise 8:
/**
 * Create a program that reads numbers from the user and prints their sum. The program should stop  asking for numbers when user enters the number 0.
The program should work as follows:  
3
Sum now: 3  
2
Sum now: 5  
1
Sum now: 6
1
Sum now: 7  
0
Sum in the end: 7  
 */

let number6 = +prompt("Input number:");
let sum2 = 0;

while (number6 !== 0) {
  sum2 += number6;
  console.log(`Sum now: ${sum2}`);
  number6 = +prompt("Input number:")
}

console.log(`Sum in the end: ${sum2}`);

//  exercise 9:
/**
 * Create a program that calculates the sum of 20+21+22+...+2n, where n is a number entered by the user.  The notation 2i means raising the number 2 to the power of i, for example 24 = 2*2*2*2 = 16. In Java  we cannot write abdirectly, but instead we can calculate the power with the command  
Math.pow(number, power). Note that the command returns a number of double type (i.e. floating  point number). A double can be converted into the int type (i.e. whole number) as follows: int  result = (int)Math.pow(2, 3). This assigns the value of (2*2*2)  to variable result.  
Example outputs:  
Type a number: 3
The result is 15  
Type a number: 7 The  
result is 255 
 */


