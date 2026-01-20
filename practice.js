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
    total = total + array[i];
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

/* TASK 1:
Create a variable time.
If time is between 6 and 11, print "Morning".
If between 12 and 17, print "Afternoon".
If between 18 and 21, print "Evening".
Else print "Night". */

let time = 13;

if(time >= 6 && time <= 11){
    console.log("Morning")
} else if (time >= 12 && time <= 17){
    console.log("Afternoon")
} else if (time >= 18 && time <= 21){
    console.log("Evening")
} else {console.log("Night")};

/* TASK 2:
Create a function calculateSum that takes an array of numbers
and returns the total sum. Print the result. */

function calculateSum(arr){
    let sum = 0
    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
    } return sum;
}
let arraySum = [1, 3, 5, 8];
console.log(calculateSum(arraySum))

/* TASK 3:
Create an array of prices.
Use a loop to calculate the average price. */

let num = [1, 2, 3, 4, 5]

function calculateSum(arr){
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
   }

   return sum/arr.length
}

console.log(calculateSum(num));

/* TASK 4:
Create a function findSmallest that takes an array
and prints the smallest number in it. */

function findSmallest(arr){
    let num = [arr[0]]
    for(i=1; i<arr.length; i++){
        if(num > arr[i]){
            num = arr[i]
        }
    } return num
}

let numbz = [2,4,1,5]
console.log(findSmallest(numbz));

/* TASK 5:
Create an array of usernames.
Print only usernames whose length is less than 6. */

let username = ["adity", "rameshh", "mohit", "abhiudai"];

for(i=0; i<username.length; i++){
    if(username[i].length < 6){
        console.log(username[i])
    }
}

/* TASK 6:
Create an object called order with:
itemName, quantity, pricePerItem.
Calculate and print the total price of the order. */

let order = {
    itemName : "Apple",
    Quantity : 7,
    pricePerItem : 50
}
function totalPrice(a, b){
    return a * b
}
console.log(totalPrice(order.Quantity, order.pricePerItem));

/* TASK 1:
Create an array of numbers.
Use a loop to print only the EVEN numbers. */

let arrayNum = [1, 2, 4, 5, 7]

for(i=0; i<arrayNum.length; i++){
    if(arrayNum[i] % 2 === 0){
        console.log(arrayNum[i])
    }
}

/* TASK 2:
Create an array of numbers.
Use a loop to count how many numbers are GREATER than 10.
Print the count. */

let arrays = [1, 56, 77, 3]
let count = 0;
for(i=0; i<arrays.length; i++){
    if(arrays[i]>10){
        count++;
    }
} console.log(count);

/* TASK 3:
Create an array of numbers.
Use a loop to calculate the TOTAL sum.
Print the sum. */

let arrayNumb = [1, 3, 5, 6];
let sum = 0
for (i=0; i<arrayNumb.length; i++){
    sum = sum + arrayNumb[i];
}
console.log(sum);