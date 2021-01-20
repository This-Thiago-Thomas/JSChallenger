// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

//Input
let number = 1.5

//Function
function myFunction(input) {
   return input - Math.round(input) == 0;
}

//Output
console.log(myFunction(number));
