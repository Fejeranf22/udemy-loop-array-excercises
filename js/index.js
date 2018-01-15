

console.log("Write a 'printReverse()' that takes an array as an arguement and prints out the elements in the array in reverse order(dont reverse the array just print in reverse)");
console.log(" Q # 1 *************");
var array1 = ["red", "yellow ", "green", "white", "blue"];
console.log(array1);
// function  printReverse(){
//   array1.forEach(function(item){
//     console.log(item)
//   });
function printReverse() {
  for(var i=array1.length;i>= 0; i--){
    console.log(array1[i]);
  }
};
printReverse(array1);

console.log("******** answer #1 above ***********")
// print the array in border
// reverse the order

console.log("Write a function 'isUniform()' which takes an array as an arguemnt and returns true if all elements of the array are identical.")
console.log("Q # 2 ****************");
var array2 = [1, 1, 1, 1];
var array3 = [1, 1, 1, 2];
var array4 = [2, 2, 2, 2];
var array5 = [2, 2, 3, 3];

function isUniform() {
  var result = ""[0];
  for(var i=0;i<="".length;i++)
  if(i === result){
    console.log("true")
  }
};
isUniform(array2);
// save value of array at 0;
// loop through the array
// compare numbers to saved value
// print to console

console.log("******** answer #2 above ***********")

console.log("write function ' sumArray()' that accepts an array of numbers and returns the sum of all numbers.");
console.log(" Q # 3 *****************");

console.log("******** answer #3 above ***********")

console.log(" write a function 'max()' that accepts an array of numbers and returns the largest number in the array.");
console.log(" Q # 4 *****************");
console.log("******** answer #4 above ***********")
