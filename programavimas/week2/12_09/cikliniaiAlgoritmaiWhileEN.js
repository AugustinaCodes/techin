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
 * 
 */