// UNDERSTANDING BINARY
// 
// Here we will show you how to convert the binary number 100000 to decimal. First, note that the binary number system is a base-2 system which means it only has two numbers (0 and 1) instead of the decimal number system which has 10 numbers (0 through 9).

// To convert the binary number 100000 to decimal (or any other binary number for that matter) you follow these steps:

// Step 1) You start with the last digit in 100000: Multiply the last digit by 2^0, Multiply the second to last digit by 2^1, Multiply the third to the last digit by 2^2, Multiply the fourth to the last digit by 2^3, Multiply the fifth to the last digit 2^4, and so on until all the digits are used.

// Step 2) Add up all the products you got from Step 1 to get the answer to 100000 in decimal.

// Using the steps above, here is the math showing you how to convert 100000 binary to decimal. (Don't forget that we start with the last digit in 100000 on the right side and then work our way to the left.)

// 0 x 20 = 0
// 0 x 21 = 0
// 0 x 22 = 0
// 0 x 23 = 0
// 0 x 24 = 0
// 1 x 25 = 32

// 0 + 0 + 0 + 0 + 0 + 32 = 32

// That is all there is to it. Here is the answer to 100000 binary to decimal:

// 32


// Given two binary strings a and b, return their sum as a binary string.


// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// I'm going to use BigInt to convert the string into an integer, then use 0b to convert it into decimal. Add those two together, than convert back to binary using toString(2).

// Not the best runtime (109ms) using the builtins. May come back later for an improvement.
var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}

console.log(addBinary('11','1'));