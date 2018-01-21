

console.log("Write a 'printReverse()' that takes an array as an arguement and prints out the elements in the array in reverse order(dont reverse the array just print in reverse)");
console.log(" Q # 1 *************");
var array1 = ["red", "yellow ", "green", "white", "blue"];
console.log(array1);
// function  printReverse(){
//   array1.forEach(function(item){
//     console.log(item)
//   });
function printReverse(array) {
  for(var i=array.length;i>= 0; i--){
    console.log(array[i]);
  }
};
printReverse(array1);

console.log("******** answer #1 above ***********")


console.log("Write a function 'isUniform()' which takes an array as an arguemnt and returns true if all elements of the array are identical.")
console.log("Q # 2 ****************");
var array2 = [1, 1, 1, 1];
var array3 = [1, 1, 1, 2];
var array4 = ["b", "b", "b", "b"];
var array5 =[ "a", "a", "b", "c"];
// declare variable
function isUniform(arr){
// store variable
var result = arr[0];
// loop through array
 for(var i=0;i<=arr.length;i++){
// compare values to each number int he array
    if(arr[i]!==result){
      return "false"
    };
  };
  // if true return true
  return "true";
};
isUniform(array2);
isUniform(array3);
isUniform(array4);
isUniform(array5);

console.log("******** answer #2 above ***********")
//
console.log("write function ' sumArray()' that accepts an array of numbers and returns the sum of all numbers.");
console.log(" Q # 3 *****************");
var seven = [1, 2, 3, 4];
var eight = [11, 22, 33];
var nine = [99, 100, 1];
var ten = [12, 34, 56, 78];

function sumArray(arr) {
  // declare variable to store sum
  var sum =0;
  // forEach function to loop through every variable
  arr.forEach(function(i){
    // with the for each loop add value at "i" to "sum"
  sum += i;
});
// return the sum after the function finishes
return sum;
};
sumArray(seven);
sumArray(eight);
sumArray(nine);
sumArray(ten);


console.log("******** answer #3 above ***********");
//
console.log(" write a function 'max()' that accepts an array of numbers and returns the largest number in the array.");
console.log(" Q # 4 *****************");
// // console.log("******** answer #4 above ***********");

function max(arr) {
  // create variable to store initial value of the array
  var max = arr[0];
  // loop through the array after the initial valur
  for (var i = 1; i<=arr.length;i++) {
    // create an if statement to see if the value of i is greater than the current value of max
    if(arr[i] > max) {
      // tell the console if the statement is true change the value of max to the current  value at "i" === "arr{i}"
      var max = arr[i];
    }
  }
  // after the cycle is through return the updated max value
  return max;
};
