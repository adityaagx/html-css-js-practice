/*
TASK 1:
Create a variable called name and store your name in it.
Print it using console.log.*/

let firstname = "Aditya"
console.log(firstname)

/*TASK 2:
Create a variable called age.
If age is 18 or more, print "Adult".
Otherwise, print "Minor".*/


let age = 21

if (age>=18){
    console.log("adult")
}
else {
    console.log("minor")
}


/*TASK 3:
Create a function called greet that takes one parameter (name).
The function should print "Hello, <name>".*/

function greet(personname){
    console.log("Hello" + personname)
}
greet(" Aditya ")

/*TASK 4:
Create a function called multiply that takes two numbers
and returns their multiplication result.*/

function multiply(a,b) {
    return a * b
}
console.log(multiply(2,3))

/*TASK 5:
Create an array of 5 numbers.*/

let numbers = [1,2,3,4,5]

/*TASK 6:
Use a loop to print each number from the array.*/

let i=0;
for(i=0; i<numbers.length; i++ ){
    console.log(numbers[i])
}

/*TASK 7:
Create an object called user with:
- name
- age
- city
*/

let user = {
    firstname : "Aditya",
    age : "21",
    city : "Ajmer",
}
console.log(user)

/* TASK 1:
Create a variable temperature.
If temperature is greater than 30, print "Hot".
If between 15 and 30, print "Normal".
Else print "Cold". */

let temperature = 20;

if (temperature > 30){
    console.log("Hot")
}
if(temperature >= 15 && temperature <=30){
    console.log("Normal")
}
else {
    console.log("Cold")
}

/* TASK 2:
Create a function square that takes a number
and returns its square. Print the result. */

let n = 3;
function square(n){
    return n * n
}
console.log(square(n))

/* TASK 3:
Create an array of numbers.
Calculate and print the total sum of all numbers using a loop. */

let array = [1,2,3,4,5];
let total = 0;

for(let i=0; i<array.length; i++){
    total = total + numbers[i];
}
console.log(total);

/* TASK 4:
Create a function findLargest that takes two numbers
and prints the larger one. */

function findLargest(a, b) {
    if (a>b){
        console.log(a)
    } else {
        console.log(b)
    }
}

    findLargest(4,9)

/* TASK 5:
Create an array of names.
Use a loop to print only names that have more than 4 characters. */

let names = ["aditya", "bhavya", "rit"];
for (i=0; i<names.length; i++){
   if (names[i].length > 4){
    console.log(names[i]);
   }
}

/* TASK 6:
Create an object called car with properties:
brand, model, year.
Print a sentence using the object values. */

let car = {
    brand: "TATA",
    model: "Sierra",
    year: "2025",
}
console.log(car.brand + car.model + " was launched in " + car.year)

/* TASK 1:
Create a variable marks.
If marks is 75 or more, print "Excellent".
If between 40 and 74, print "Pass".
Else print "Fail". */

let marks = 70;

if (marks > 75){
    console.log("Excellent");
} else if (marks >= 40 && marks <= 74){
    console.log("Pass")
} else {
    console.log("Fail")
}

/* TASK 2:
Create a function cube that takes a number
and returns its cube. Print the result. */

function cube(a){
    return a * a * a
}
console.log(cube(4));

/* TASK 3:
Create an array of numbers.
Use a loop to find and print the largest number in the array. */

let numbersz = [1, 2, 3, 4, 5];
let largest = numbersz[0];

for (let i = 1; i < numbersz.length; i++) {
    if (numbersz[i] > largest) {
        largest = numbersz[i];
    }
}

console.log(largest);



/* TASK 4:
Create a function countEven that takes an array
and prints how many even numbers are in it. */

function countEven(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    console.log(count);
}

countEven([1, 2, 3, 4]);


/* TASK 5:
Create an array of words.
Print only the words that start with the letter "a". */

let words = ["apple", "banana", "avocado", "mango"];

for (let i = 0; i < words.length; i++) {
    if (words[i][0] === "a") {
        console.log(words[i]);
    }
}

/* TASK 6:
Create an object called student with:
name, rollNumber, marks.
If marks is greater than 50, print "Passed".
Else print "Failed". */

let student = {
    firstname : "aditya",
    rollnumber : 5,
    marks : 91,
}
if (student.marks > 50){
    console.log("Passed");
} else {
    console.log("Failed")
}
