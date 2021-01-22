// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

//Function
function myFunction(str1, str2) {

    return str1.indexOf(str2) !== -1 ? str2 + str1 : str1 + str2;

}

//Output
console.log(myFunction("cheese", "cake"))
console.log(myFunction("lips", "s"))
console.log(myFunction("Java", "script"))
console.log(myFunction(" think, therefore I am","I"))