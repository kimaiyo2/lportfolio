/*
function myFunction(a, b) {
  return a * b;
}   
console.log(myFunction(10, 2));
console.log(myFunction(20, 5));

// This is a simple function that takes two numbers as arguments and returns their product.
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

let age = prompt("Enter your age:" );
if (age < 18) {
  console.log("You are underage.");
}
else {
  console.log("You are old enough to vote.");
}

  
let num1 = Number(prompt("Enter first number:"));
let operator = (prompt("Enter operator (+, -, *, /):"));
let num2 = Number(prompt("Enter second number:"));

let result;

if (operator == "+") {
  result = num1 + num2;
  console.log(`the addition is ${result}`);
}
else if (operator == "-") {
  result = num1 - num2;
  console.log(`the subtraction is ${result}`);
}
else if (operator == "/") {
  result = num1 / num2;
  console.log(`the division is ${result}`);
}
else if (operator == "*") {
  result = num1 * num2;
  console.log(`the multiplication is ${result}`);
}
else {
  console.log("Invalid operator");
}
alert("you are a mathematician");
*/
/*
let age = Number(prompt ("Enter your age:" ));
if (age >= 18) {
  alert("You are an adult.");
}
else {
  alert("you are a child");
}
  */
/*
 for(i=1;i<=7;i+=3) {
  console.log("how are you!" ,i);
 }

*/
/*
 let result = confirm("Do you want to continue?");
if (result) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}
*/
/*
let i = 1;
do {
  console.log("Count:", i);
  i++;
} 
while (i <= 8);

let fruits = ["apple", "banana", "cherry"];

fruits.push("grape");
fruits.shift();
console.log(fruits); // ["apple", "banana"]
console.log(fruits.length); // 2
fruits[3] ="avocado";
fruits[4] = "kiwi";
console.log(fruits);


let matrix=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
]
console.log(matrix[2][2]);

let birds = ["sparrow", "eagle", "parrot"];
console.log(birds.unshift("owl"));

for (let [index,bird] of birds.entries()) {
  console.log(index +  " : " + " " +bird);
}
console.log(birds.indexOf("parrot" , "eagle"));

let fruits = ["apple", "banana", "cherry", "kiwi", "mango"];

fruits.push("avocado");
fruits.unshift("grapes");
console.log(fruits.sort());
console.log(fruits);
console.log(fruits.includes("avo"));
*/
// Step 1: Declare and initialize the array
//let scores = [80, 45, 67, 30, 90];

// Step 2: Function to calculate average
//function getAverage(arr) {
  //let sum = 0;
//  for (let i = 0; i < arr.length; i++) {
 //   sum += arr[i];
 // }
 // return sum / arr.length;
//}

// Step 3: Loop through scores and print pass/fail
//for (let i = 0; i < scores.length; i++) {
//  let result = scores[i] >= 50 ? "Pass" : "Fail";
 // console.log("Score: " + scores[i] + " - " + result);


// Step 4: Print the average
//let avg = getAverage(scores);
//console.log("Average Score: " + avg);
