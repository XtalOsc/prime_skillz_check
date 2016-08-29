// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
function functionName() {
  return 4;
}
functionName();
// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
var result;
function multiply(num1, num2){
  result = num1 * num2;
  return result;
}
multiply(2,3);
// 3 - Write a function expression
// that takes one argument and
// console logs that value.
var cat = function(num){
  console.log(num);
}
cat("string");
// 4 - Write a function declaration
// that takes a number and divides it
// by two.
function divide(num){
  num /= 2;
  return num;
}
// 5 - Call the function from 4 and
// pass it into the function from 2 called with
// the arguments 10, 20. Console log the result.
var concat = divide(multiply(10,20));
console.log(concat);
