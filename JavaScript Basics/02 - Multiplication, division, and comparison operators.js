// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers

//Inputs
let input1 = 10;
let input2 = 5;

//The function
function myFunction(a,b) {
    return a < b ? a / b : a * b;
}

//Output
console.log(myFunction(input1,input2));