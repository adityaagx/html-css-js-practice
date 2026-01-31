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

/* TASK 4:
Create an array of numbers.
Use a loop to find the SMALLEST number.
Print it. */

let Num = [2, 3, 1, 4];

let smallest = Num[0];
for(i=0; i<Num.length; i++){
    if(Num[i]<smallest){
        smallest = Num[i]
    }
} console.log(smallest);

/* TASK 5:
Create an array of words.
Use a loop to print the word with the LONGEST length. */

let wordz = ["aditya", "bhavya", "abhiudai", "ritesh"];

let longest = wordz[0];
for(i=0; i<wordz.length; i++){
    if(wordz[0].length < wordz[i].length){
        longest = wordz[i]
    }
} console.log(longest);

/* TASK 1:
Create an array of numbers.
Use a loop to REVERSE the array manually.
Print the reversed array.*/

let Number = [1, 2, 3, 4, 5];
let reversed = []

for(i = Number.length-1; i>=0; i--){
    reversed.push([Number[i]]);
}  

console.log(reversed);

/* TASK 2:
Create an array of numbers.
Use a loop to remove duplicate values.
Print the new array.
(Hint: check if value already exists before pushing) */

let nums = [1, 2, 3, 3, 2, 4, 5];
let unique = []

for(i=0; i<nums.length; i++){
    if(!unique.includes(nums[i])){
        unique.push(nums[i]);
     }
    }
console.log(unique);

/* TASK 3:
Create an array of numbers.
Use a loop to find the SECOND LARGEST number. */

let numb = [1, 2, 3, 4, 5];
let maxLargest = numb[0];
let secondLargest = numb[0];

for(let i = 0; i < numb.length; i++) {
    if(numb[i] > maxLargest) {
        secondLargest = maxLargest;
        maxLargest = numb[i];
    } else if(numb[i] > secondLargest && numb[i] !== maxLargest) {
        secondLargest = numb[i];
    }
}

console.log(secondLargest);

/* TASK 4:
Create an array of numbers.
Use a loop to count how many POSITIVE, NEGATIVE,
and ZERO values are present.
Print all three counts. */

let numz = [1, 5, -3, 0, -2, 4, -7];

let positive = [];
let negative = [];
let zero = [];

for(i=0; i<numz.length; i++){
    if(numz[i]>0){
        positive++;
    } else if (numz[i]<0){
        negative++;
    } else {
        zero++
    }
}
console.log(
    "Positive" + positive,
    "Negative" + negative,
    "Zero" + zero
)

/* ===============================
   DOM PRACTICE TASKS – ONE FILE
   LEVEL 1 (BASICS)
================================ */

/* TASK 1:
Select the h1 element by its id
and change its text to "DOM is fun". */

let h1 = document.querySelector("h1");
h1.innerText = "DOM is fun";

/* TASK 2:
Select a paragraph using querySelector
and change its text color to blue. */

let p = document.querySelector("p");
p.style.color = "blue";

/* TASK 3:
Select a button by its id.
When the button is clicked,
change the background color of the body. */

let btn = document.querySelector("button");

btn.addEventListener("click", function (){
    document.body.style.backgroundColor = "green";
});

/* TASK 4:
Select an input field.
When the user types something,
print the value in the console. */

let input = document.querySelector("input");

input.addEventListener("input", function () {
    console.log(input.value);
});

/* TASK 5:
Create a new paragraph element using JavaScript.
Set its text to "I was added using JS".
Add it inside the body. */

let newPara = document.createElement("p");

newPara.innerText = "I was added using JS";
document.body.appendChild(newPara);

/* TASK 6:
Select all list items (li).
Use a loop to change their text color to green. */

let listItems = document.querySelectorAll("li");

for(let i=0; i<listItems.length; i++){
    listItems[i].style.color = "green";
};

/* TASK 7:
Select a button.
When clicked, add a class called "active"
to a div element. */

let box = document.querySelector("button");

box.addEventListener("click", function(){
    box.classList.add("active");
});

/* TASK 8:
Select the same button.
When clicked again, remove the "active" class
from the div element. */

box.addEventListener("dblclick", function(){
    box.classList.remove("active");
})

/* TASK 9:
Select a form.
When the form is submitted,
stop the page from refreshing
and print "Form submitted" in the console. */

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submitted");
})

/* TASK 10:
Select a paragraph.
When the mouse goes over it,
change its text to "Mouse is here".
When the mouse leaves,
change it back to the original text. */

let text = document.querySelector("p");
let originalText = text.innerText;

text.addEventListener("mouseover", function(){
    text.innerText = "Mouse is here";
});

text.addEventListener("mouseout", function(){
    text.innerText = originalText;
})

/* ===============================
   EVENT LISTENER PRACTICE TASKS
   LEVEL 1 – BASICS
================================ */

/* TASK 1:
Select a button.
When the button is clicked,
print "Button clicked" in the console.
*/

let button = document.querySelector("button")

button.addEventListener("click" , function(){
    console.log("Button clicked");
});

/* TASK 2:
Select a paragraph.
When the mouse goes over it,
change its text color to red.
When the mouse leaves,
change the color back to black.
*/

let p = document.querySelector("p");

p.addEventListener("mouseover", function(){
    p.style.color = "red";
})
p.addEventListener("mouseout", function(){
    p.style.color = "black";
})
/* TASK 3:
Select an input field.
When the user types,
print the current value in the console.
*/

let input = document.querySelector("input");

input.addEventListener("input", function (){
    console.log(input.value);
});

/* TASK 4:
Select a button.
When clicked,
change the text of an h1 to "Hello DOM".
*/
{
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    h1.innerText = "Hello DOM"
});
}
/* TASK 5:
Select a div.
When the button is clicked,
toggle a class called "active" on the div.
*/
{
let div = document.querySelector("div");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    div.classList.toggle("active");
});
}
/* ===============================
   LEVEL 2 – LOGIC + EVENTS
================================ */

/* TASK 6:
Select a button.
Keep a count variable.
Each time the button is clicked,
increase the count and print it.
*/
{
let btn = document.querySelector("button");
let count = 0;
btn.addEventListener("click", function (){
    count++;
    console.log(count);
})
}
/* TASK 7:
Select a form.
When the form is submitted,
stop page refresh
and print "Form submitted successfully".
*/
{
    let formsubmit = document.querySelector(".form-submit");

    formsubmit.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Form submitted successfully");
    })
}
/* TASK 8:
Select an input and a paragraph.
When the user types,
show the input value live inside the paragraph.
*/
{
    let inputtype = document.querySelector(".input-type");
    let p = document.querySelector(".paragraph");
    
    inputtype.addEventListener("input", function(){
        p.innerText = input.value;
    });
}
/* TASK 9:
Select all buttons.
When any button is clicked,
print the text of the clicked button.
*/
{
  const buttons = document.querySelectorAll("button");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log(btn.innerText);
    });
  });
}

/* TASK 10:
Select a div.
When the mouse moves over it,
change its background color randomly.
*/
{
  const box = document.querySelector(".div");

  box.addEventListener("mouseover", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
  });
}

/* TASK 11:
Create a button using JavaScript.
Add it to the page.
When clicked,
show an alert saying "Button created by JS".
*/
{
    let button = document.createElement("button");
    button.innerText = "Click me";

    document.body.appendChild("button");

    button.addEventListener("click", function (){
        alert("Button created by JS");
    })
}

/* =====================================
   FUNCTIONS PRACTICE – LEVEL 1
   Write your solution BELOW each task
===================================== */

/* TASK 1:
Create a function named sayHello
that prints "Hello World" to the console.
Then call the function.
*/

{
  function sayHello(){
    console.log("Hello World");
  }
  sayHello();
}

/* TASK 2:
Create a function named addNumbers
that takes two parameters a and b,
returns their sum,
store the result in a variable,
and print it.
*/
{
    function addNumbers(a, b){
        return a + b;    }

    let sum = addNumbers(2, 5);
    console.log(sum);
}
/* TASK 3:
Create a function named greetUser
that takes a name as parameter
and returns "Hello, <name>".
Print the returned value.
*/
{
    function greetUser(name){
        return ("Hello, " + name);
    }
    console.log(greetUser("Aditya"));
}

/* =====================================
   FUNCTIONS AS VALUES – PRACTICE
   7 TASKS
   Paste this in one JS file in VS Code
   Write your solution BELOW each task
===================================== */

/* TASK 1:
Create a function named greet
that returns "Hello!".
Store this function in a variable called sayHelloFunc.
Call sayHelloFunc and print the result.
*/
{
    let sayHelloFunc = function greet(){
        return "Hello!"
    } 
    console.log(sayHelloFunc());
}

/* TASK 2:
Create a function named multiply
that takes two numbers and returns their product.
Store it in a variable called multiplyFunc.
Call multiplyFunc with 3 and 4 and print the result.
*/
{
    let multiplyFunc = function multiply(a, b){
        return a * b;
    }
    console.log(multiplyFunc(3, 4));
}

/* TASK 3:
Create a function named isEven
that takes a number and returns true if it's even, false otherwise.
Store it in a variable called checkEven.
Call checkEven with 10 and print the result.
*/
{
    let checkEven = function isEven(a){
        if (a % 2 === 0){
            return "True"
        } else {
            return "False"
        }
    }
    console.log(checkEven(10));
}
/* TASK 4:
Write a function named shout
that takes a string and returns it in uppercase.
Store it in a variable called shoutFunc.
Call shoutFunc with "hello world" and print the result.
*/

{
    let shoutFunc = function shout(string){
        return string.toUpperCase();
    }
    console.log(shoutFunc("hello world"));
}

/* TASK 5:
Create a function named operate
that takes three parameters: a, b, and operationFunc.
- a and b are numbers
- operationFunc is a function that performs an operation on a and b
Return the result of calling operationFunc(a, b).
Use this to add and multiply numbers.
*/

{
    function add(a, b){
        return a + b;
    }

    function multiply(a, b){
        return a * b;
    }

    function operate (a, b, operationFunc){
        return operationFunc(a, b);
    }
    console.log(operate(4, 7, multiply))
}


/* TASK 6:
Create a function named callTwice
that takes a function as a parameter
and calls it two times.
Write a simple function named sayHi that prints "Hi!" and pass it to callTwice.
*/

{
    function callTwice(func) {
        func();
        func();
    }

    function sayHi() {
        console.log("Hi!");
    }

    callTwice(sayHi);
}

/* TASK 7:
Create a function named callWithValue
that takes a function and a value as parameters.
It should call the function with the value and print the result.
Example: pass a function that doubles a number and the value 5. It should print 10.
*/

{
    function callWithValue(func, value) {
        console.log(func(value));
    }

    function double(num) {
        return num * 2;
    }

    callWithValue(double, 5); // 10
}

/***********************
 CALLBACK TASKS PRACTICE
***********************/

/* =====================
TASK 1 (Beginner)
Create a function named greet
that takes a callback and calls it.
Create another function sayHello
that logs "Hello!".
Pass sayHello to greet.
===================== */
{
   function greet(callback){
      return callback();
   }
   function sayHello(){
    console.log("Hello!");
   }
   greet(sayHello);
}   

/* =====================
TASK 2
Create a function named process
that accepts a callback.
The callback should print "Processing done".
===================== */
{
    function process(callback){
        return callback();
    }
    
    function done(){
        return "Processing Done"
    }

    console.log(process(done));
}


/* =====================
TASK 3
Create a function named welcomeUser
that takes a name and a callback.
Inside welcomeUser, print "Welcome <name>"
then call the callback.
===================== */
{
    function welcomeUser(name, callback){
        console.log("Welcome " + name);
        callback();
    }

    function afterWelcome(){
        console.log("Callback executed");
    }

    welcomeUser("Aditya", afterWelcome);
}


/* =====================
TASK 4
Create a function named calculate
that takes two numbers and a callback.
The callback should add the numbers.
Print the result.
===================== */
{
    function calculateSum(a, b, callback){
        callback(a, b);
    }

    function add(a, b){
        console.log(a + b);
    }

    calculateSum(4, 7, add);
}


/* =====================
TASK 5
Same as Task 4, but this time
use a callback to multiply the numbers.
===================== */
{
    function calculateMultiply(a, b, callback){
        callback(a, b);
    }

    function multiply(a, b){
        console.log(a * b);
    }

    calculateMultiply(4, 8, multiply);
}


/* =====================
TASK 6 (Intermediate)
Create a function named checkNumber
that takes a number and two callbacks:
- one if number is even
- one if number is odd
Call the correct callback.
===================== */
{
    function checkNumber(num, cb1, cb2){
        if(num % 2 === 0){
            cb1();
        }
        else {
            cb2();
        }
    }
    function cb1(){
        console.log("Even");
    }
    function cb2(){
        console.log("Odd");
    }
    
    checkNumber(5, cb1, cb2);
}


/* =====================
TASK 7
Create a function named repeat
that takes a callback and a number n.
Call the callback n times.
===================== */

{
    function repeat(callback, n){
        for(let i = 0; i < n; i++){
            callback();
        }
    }

    function sayHi(){
        console.log("Hi");
    }

    repeat(sayHi, 3);
}


/* =====================
TASK 8
Create a function named greetAfterDelay
that takes a callback.
Use setTimeout to call the callback
after 2 seconds.
===================== */

{
    function greetAfterDelay(callback){
        setTimeout(() => {
            callback();
        }, 2000);
    }

    function sayHello(){
        console.log("Hello after delay");
    }

    greetAfterDelay(sayHello);
}


/* =====================
TASK 9
Create a function fetchData
that simulates fetching data using setTimeout.
After 1 second, call a callback
with the message "Data received".
===================== */

{
    function fetchData(callback){
        setTimeout(() => {
            callback("Data received");
        }, 1000);
    }

    function showData(message){
        console.log(message);
    }

    fetchData(showData);
}

/* =====================
TASK 10
Create a function calculateSquare
that takes a number and a callback.
The callback should receive the square
and print it.
===================== */
{
    function calculateSquare(n, callback){
        callback(n);
    }

    function square(n){
        console.log(n * n);
    }
    
    calculateSquare(4, square);
}

/* =====================
TASK 11 (Real-world style)
Create a function loginUser
that takes username, password, and a callback.
If username === "admin", call callback with "Login successful".
Else call callback with "Login failed".
===================== */

{
    function loginUser(username, password, callback){
        if (username === "admin"){
            callback("Login successfull");
        } else {
            callback("Login failed");
        }
    }

    function handleLogin(result){
        console.log(result);
    }

    loginUser("admin", "123", handleLogin);
}


/* =====================
TASK 12
Create a function downloadFile
that uses setTimeout (3 seconds).
After download, call a callback that logs
"Download complete".
===================== */

{
    function downloadFile(callback){
        settimeout(() => {callback()}, 3000);
    }

    function success(){
        console.log("download complete");
    }

    downloadFile(success);
}

/* =====================
TASK 13
Create a function performOperation
that takes a, b, and a callback.
Use callback to subtract a and b.
===================== */

{
    function performOperation(a, b, callback){
        callback(a, b);
    }

    function subtract(a, b){
        console.log(a - b);
    }

    performOperation(7, 2, subtract);
}

/* ==================================================
TASK 1 (Beginner)
Create a function named sayHiAfterDelay
that uses setTimeout to print "Hi!" after 1 second.
================================================== */
{
    function sayHiAfterDelay(){
        setTimeout(() => {console.log("Hi")}, 1000 );
    }

    sayHiAfterDelay();
}

/* ==================================================
TASK 2 (Beginner)
Create a function greetUser
that takes a name and a callback.
Use setTimeout to wait 1 second,
then print "Hello <name>" and call the callback.
The callback should print "Greeting finished".
================================================== */
{
    function greetUser(name, callback){
        setTimeout(() => {
            console.log("Hello " + name);
            callback();
        }, 1000);
        
    }

    function success(){
        console.log("Greeting Finished");
    }

    greetUser("Aditya", success);
}

/* ==================================================
TASK 3 (Intermediate)
Create a function calculateSumAsync
that takes two numbers and a callback.
Use setTimeout (2 seconds),
then send the sum to the callback.
The callback should print the result.
================================================== */
{
    function calculateSumAsync(a, b, callback){
        setTimeout(() => {callback(a + b)}, 2000);
    }

    function sumResult(c){
        console.log(c);
    }

    calculateSumAsync(4, 7, sumResult);
}

/* ==================================================
TASK 4 (Intermediate – Real World Style)
Create a function fetchUserData
that simulates fetching data using setTimeout (2 seconds).
After delay, call a callback with the object:
{ name: "Aditya", age: 20 }

Print the user data inside the callback.
================================================== */
{
    function fetchUserData(callback){
        setTimeout(() => {callback()}, 2000 )
    }

    function user(){
        console.log("name: Aditya, age: 20" );
    }

    fetchUserData(user);
}

/* ==================================================
PROMISE TASK 1 (Beginner)
Create a promise that resolves after 1 second
and prints "Promise resolved".
================================================== */
{
    let promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 1000);
    })

    promise.then((result) => {
        console.log(result);
    })
}

/* ==================================================
PROMISE TASK 2 (Beginner)
Create a promise that immediately resolves
with the value "Hello Promise".
Use .then() to print the value.
================================================== */
{
    let promise = new Promise ((resolve) => {
        resolve("Hello Promise");
    })

    .then((result) => {
        console.log(result);
    })
}
/* ==================================================
PROMISE TASK 3 (Beginner)
Create a promise that resolves after 2 seconds
with the number 10.
Use .then() to print the number.
================================================== */
{
    let promise = new Promise((resolve) => {
        setTimeout(() => {
           resolve (10)
        }, 2000);
    })

    .then((result) => {
        console.log(result);
    })
}

/* ==================================================
PROMISE TASK 4 (Beginner)
Create a promise that rejects
with the message "Something went wrong".
Use .catch() to print the error.
================================================== */
{
    let promise = new Promise((resolve, reject) => {
        reject("Something went wrong");
    })

    .catch((reject) => {
        console.log(reject);
    })
}

/* ==================================================
PROMISE TASK 5 (Beginner – Real Feel)
Create a function getData
that returns a promise.
The promise should resolve after 1 second
with the string "Data loaded".
Call the function and print the result.
================================================== */
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 1000);
    });
}

getData().then((data) => {
    console.log(data);
});

/* ==================================================
PROMISE TASK 6 (Beginner)
Create a promise that resolves after 1 second
with the message "Task 6 done".
Print the message using .then().
================================================== */
{
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 6 done");
        }, 1000);
    })

    .then((resolve) => {
        console.log(resolve);
    })
}

/* ==================================================
PROMISE TASK 7 (Beginner)
Create a promise that rejects after 1 second
with the message "Task 7 failed".
Handle the error using .catch().
================================================== */
{
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task 7 failed");
        }, 1000);
    })

    .catch((reject) => {
        console.log(reject);
    })
}

/* ==================================================
PROMISE TASK 8 (Beginner – Function + Promise)
Create a function named checkAge
that returns a promise.
If age >= 18, resolve with "Access granted".
Else reject with "Access denied".

Call the function with age 20
and print the result.
================================================== */
{
    function checkAge(age){
        return new Promise((resolve, reject) => {
            if(age >= 18){
                resolve("Access granted");
            } else{
                reject("Access denied");
            }
        })
    }

    checkAge(20)
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log(reject);
    })
}

/* ==================================================
PROMISE CHAIN TASK 1 (Beginner)
Create a function firstTask
that returns a promise.
After 1 second, resolve with "First task done".

Call it and print the result using .then().
================================================== */
{
    function firstTask(){
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("First Task done");
          }, 1000);
        }
        )}

    firstTask().then((resolve) => {
        console.log(resolve);
    })
}

/* ==================================================
PROMISE CHAIN TASK 2 (Beginner)
Create two functions:

stepOne → resolves after 1 sec with "Step One"
stepTwo → resolves after 1 sec with "Step Two"

Call stepOne, then stepTwo using chaining.
Print both results.
================================================== */
{
    function stepOne(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step One");
            }, 1000);
        })
    }

    function stepTwo(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step Two");
            }, 1000);
        })
    }

    stepOne().then((resolve) => {
        console.log(resolve);
        return stepTwo(result);
    })

    .then((finalResult) => {
        console.log(finalResult);
    })
}

/* ==================================================
PROMISE CHAIN TASK 3 (Beginner – Passing Data)
Create a function addTen
that takes a number and returns a promise.
After 1 sec, resolve with number + 10.

Call addTen(5),
then addTen again with the result,
then print final value.
================================================== */
{
    function addTen(number){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(number + 10);
            }, 1000);
        } )
    }

    addTen(5)
       .then((result1) => {
        console.log(result1);
        return addTen(result1);
    })

    .then((result2) => {
        console.log(result2);
    })
}

/* ==================================================
PROMISE CHAIN TASK 4 (Beginner – Real Life Style)
Create functions:

loginUser → resolves with "User logged in"
loadProfile → resolves with "Profile loaded"
showDashboard → logs "Dashboard shown"

Chain them properly.
================================================== */
{
    function loginUser(){
        return new Promise((resolve, reject) => {
            resolve("User logged in");
        })
    }

    function loadProfile(){
        return new Promise((resolve, reject) => {
            resolve("Profile loaded");
        })
    }

    function showDashboard(){
        return new Promise((resolve, reject) => {
            resolve("Dashboard shown");
        })
    }

    loginUser()
               .then((msg) => {
                console.log(msg);
                return loadProfile()
               })
               
               .then((msg) => {
                console.log(msg);
                return showDashboard()
               })

               .then ((msg) => {
                console.log(msg);
               })
}

/* ==================================================
TASK 1
Print "Hello World" after 2 seconds.
================================================== */
{
  setTimeout(() => {
    console.log("Hello world");
  }, 2000);
}

/* ==================================================
TASK 2
Create a function that takes a name and
prints "Welcome <name>" after 1 second.
================================================== */
{
   function greet(name){
    setTimeout(() => {
        console.log("Welcome " + name);
    }, 1000);
   }

   greet("Aditya");
}

/* ==================================================
TASK 3
Create a function that takes two numbers
and prints their sum after 1 second.
================================================== */
{
   function sum(a, b){
    setTimeout(() => {
        console.log(a + b);
    }, 1000);
   }

   sum(4, 7);
}

/* ==================================================
TASK 4
Create a function that accepts another function
and runs it after 1 second.
================================================== */
{
    function runDelay(callback){
        setTimeout(() => {
            callback();
        }, 1000);
    }

    function greet(){
        console.log("Hello");
    }

    runDelay(greet);
}

/* ==================================================
TASK 5
Create a function that returns something
that finishes after 1 second and prints "Done".
================================================== */
{
   function success(){
    setTimeout(() => {
        console.log ("Done")
    }, 1000);
   }

   success();
}

/* ==================================================
TASK 6
Create a function that succeeds if a number
is greater than 10 and fails otherwise.
Print the result.
================================================== */
{
   function checkTen(num){
    if(num > 10){
        console.log("Success");
    } else {
        console.log("Fails");
    }
   }

   checkTen(7);
}

/* ==================================================
TASK 7
Create two steps that run one after the other
and print:
"Step 1 complete"
"Step 2 complete"
================================================== */
{
  function stepOne(){
    return new Promise((resolve, reject) => {
        resolve("Step 1 complete");
    });
  }

  function stepTwo(){
    return new Promise((resolve, reject) => {
        resolve("Step 2 complete");
    })
  }

  stepOne()
           .then((result) => {
            console.log(result);
            return stepTwo();
           })
           .then((result) => {
            console.log(result);
           })
}

/* ==================================================
TASK 8
Create a fake data loader that returns
an object with name and age after 2 seconds
and prints it.
================================================== */
{
  function dataloader(name, age){
    setTimeout(() => {
        console.log("Data = " + name + age);
    }, 2000);
  }

  dataloader("Aditya", 21);
}

/* ==================================================
TASK 9
Create a flow:
Start → Check → Finish
Each step should run one after another
and print its name.
================================================== */
{
  function start(){
    return new Promise((resolve, reject) => {
        resolve("Start");
    })
  }

  function check(){
    return new Promise((resolve, reject) => {
        resolve("Check");
    })
  }

  function finish(){
    return new Promise((resolve, reject) => {
        resolve("Finish");
    })
  }

  start()
         .then((result) => {
            console.log(result);
            return check();
         })

         .then((result) => {
            console.log(result);
            return finish();
         })

         .then((result) => {
            console.log(result);
         })
}

/* ==================================================
TASK 10 (Challenge)
Create a login flow:
- Check username
- If correct, load profile
- Finally print "Dashboard ready"
================================================== */
{
  function checkUsername(name){
    return new Promise((resolve, reject) => {
      if(name.length > 5){
        resolve("Username correct");
      } else {
        reject("Invalid username");
      }
    });
  }

  function loadProfile(){
    return new Promise((resolve) => {
      resolve("Profile loaded");
    });
  }

  function showDashboard(){
    console.log("Dashboard ready");
  }

  checkUsername("Aditya")
    .then((result) => {
      console.log(result);
      return loadProfile();
    })
    .then((result) => {
      console.log(result);
      showDashboard();
    })
    .catch((error) => {
      console.log(error);
    });
}

/* ==================================================
TASK 11
Create a flow with three steps:
prepare → execute → cleanup

Each step should:
- run one after another
- print its step name
================================================== */
{
  function prepare(){
    return new Promise((resolve, reject) => {
        resolve("prepare");
    })
  }

  function execute(){
    return new Promise((resolve, reject) => {
        resolve("execute");
    })
  }

  function cleanup(){
    return new Promise((resolve, reject) => {
        resolve("cleanup");
    })
  }

  prepare()
          .then((result) => {
            console.log(result);
            return execute();
          })

          .then((result) => {
            console.log(result);
            return cleanup();
          })

          .then((result) => {
            console.log(result);
          })
}

/* ==================================================
TASK 12 (Challenge)
Create a purchase flow:
- verifyPayment
- placeOrder
- showConfirmation

If payment verification fails,
stop the flow and print "Payment failed".
================================================== */
{
  function verifyPayment(isPaid){
    return new Promise((resolve, reject) => {
        if(isPaid){
        resolve("Payment verification done");
        } else {reject("Payment verification failed");
        }
    })
  }

  function placeOrder(){
    return new Promise((resolve, reject) => {
        resolve("placeOrder");
    })
  }

  function showConfirmation(){
    return new Promise((resolve, reject) => {
        resolve("showConfirmation");
    })
  }

  verifyPayment()
                .then((result) => {
                    console.log(result);
                    return placeOrder();
                })

                 .then((result) => {
                    console.log(result);
                    return showConfirmation();
                })

                 .then((result) => {
                    console.log(result);
                    
                })

}

/* ==================================================
TASK 1 (Beginner)
Create an async function that prints
"Hello Async" to the console.
================================================== */
{
  function greet(){
    return new Promise((resolve, reject) => {
        resolve("Hello Async");
    })
  }

  async function hello(){
    const a = await greet();
    console.log(a);
  }

  hello();
}

/* ==================================================
TASK 2 (Beginner)
Create a function that returns a promise
which resolves with "Done" after 1 second.
Use async/await to print the result.
================================================== */
{
   function success(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 1000);
    })
   }

   async function done(){
    const a = await success();
    console.log(a);
   }

   done();
}

/* ==================================================
TASK 3 (Beginner)
Create an async function that waits 2 seconds
and then prints "Task completed".
================================================== */
{
  function done(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 2000);
    })
  }

  async function success(){
    let a = await done();
    console.log(a);
  }

  success();
}

/* ==================================================
TASK 4 (Beginner)
Create a function getNumber
that returns a promise resolving with 5.
Use async/await to get the value
and print number * 2.
================================================== */
{
  function getNumber(){
    return new Promise((resolve, reject) => {
        resolve(5);
    })
  }

  async function value(){
    const a = await getNumber();
    console.log(a * 2);
  }

  value();
}

/* ==================================================
TASK 5 (Intermediate)
Create two functions:
stepOne → resolves with "Step One"
stepTwo → resolves with "Step Two"

Use async/await to run them in order
and print both results.
================================================== */
{
  function stepOne(){
    return new Promise((resolve, reject) => {
        resolve("Step one");
    })
  }

  function stepTwo(){
    return new Promise((resolve, reject) => {
        resolve("Step Two");
    })
  }

  async function done(){
    let a = await stepOne();
    console.log(a);

    let b = await stepTwo();
    console.log(b);
  }

  done();
}

/* ==================================================
TASK 6 (Intermediate)
Create a function checkAge
that returns a promise.
If age >= 18, resolve with "Allowed".
Else reject with "Not allowed".

Handle both cases using async/await.
================================================== */
{
   function checkAge(age){
    return new Promise((resolve, reject) => {
        if (age >= 18){
            resolve("Allowed");
        } else {
            reject("Not allowed");
        }
    })
   }

   async function adult(age){
    try {
    const a = await checkAge(age);
    console.log(a);
   } catch (error){
    console.log(error);
   }}
   
   adult(17);
}

/* ==================================================
TASK 7 (Intermediate)
Create a function fetchUser
that resolves after 2 seconds
with an object { name, age }.

Use async/await to print the user data.
================================================== */
{
  function fetchUser(name, age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User " + name + " " + age);
        }, 2000);
    })
  }

  async function user(name, age){
    const a = await fetchUser(name, age);
    console.log(a);
  }

  user("Aditya", 21);
}

/* ==================================================
TASK 8 (Advanced)
Create a login flow using async/await:
- verifyUser
- loadProfile
- showDashboard

Run them in sequence.
================================================== */
{
  function verifyUser(){
    return new Promise((resolve, reject) => {
        resolve("Verify User");
    })
  }

  function loadProfile(){
    return new Promise((resolve, reject) => {
        resolve("Load Profile");
    })
  }

  function showDashboard(){
    return new Promise((resolve, reject) => {
        resolve("Show Dashboard");
    })
  }

  async function loginFlow(){
    const a = await verifyUser();
    console.log(a);

    const b = await loadProfile();
    console.log(b);

    const c = await showDashboard();
    console.log(c);
  }

  loginFlow();

}

/* ==================================================
TASK 9 (Advanced – Error Handling)
Modify a flow so that if any step fails,
execution stops and an error is printed
using try/catch.
================================================== */
{
  function stepOne(){
    return new Promise((resolve) => {
      resolve("Step One done");
    });
  }

  function stepTwo(){
    return new Promise((resolve, reject) => {
      reject("Step Two failed"); // simulate failure
    });
  }

  function stepThree(){
    return new Promise((resolve) => {
      resolve("Step Three done");
    });
  }

  async function runFlow(){
    try {
      const a = await stepOne();
      console.log(a);

      const b = await stepTwo();
      console.log(b);

      const c = await stepThree();
      console.log(c);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  runFlow();
}


/* ==================================================
TASK 10 (Challenge)
Create a purchase flow:
- verifyPayment
- placeOrder
- sendConfirmation

Use async/await.
If payment fails, stop execution
and print "Payment failed".
================================================== */

{
  function verifyPayment(status){
    return new Promise((resolve, reject) => {
      if (status === "success") {
        resolve("Payment success");
      } else {
        reject("Payment failed");
      }
    });
  }

  function placeOrder(){
    return new Promise((resolve) => {
      resolve("Order placed");
    });
  }

  function sendConfirmation(){
    return new Promise((resolve) => {
      resolve("Confirmation sent");
    });
  }

  async function orderStatus(status){
    try {
      const a = await verifyPayment(status);
      console.log(a);

      const b = await placeOrder();
      console.log(b);

      const c = await sendConfirmation();
      console.log(c);
    } catch (error) {
      console.log(error);
    }
  }

  orderStatus("failed");
}

/* ==================================================
TASK 1
Create a function that takes an array of numbers
and returns how many numbers are greater than 50.
================================================== */
{
  function countGreaterThan50(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 50) {
        count++;
      }
    }

    return count;
  }

  console.log(countGreaterThan50([23, 56, 34, 78]));
}

/* ==================================================
TASK 2
Create a button in HTML.
When clicked:
- wait 1 second
- then change the background color of the page
- then print "Background changed"
================================================== */
{
  let btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    setTimeout(() => {
      document.body.style.backgroundColor = "red";
      console.log("Background changed");
    }, 1000);
  });
}

/* ==================================================
TASK 3
Create a function that takes a string
and returns a promise.
If string length > 5 → resolve "Valid string"
Else → reject "Too short"
Handle the result properly.
================================================== */
{
function task(string){
    return new Promise((resolve, reject) => {
        if(string.length>5){
            resolve("Valid String");
        } else {
            reject("Too short");
        }
    })}  

    async function check(string){
        try {
        const a = await task(string)
        } catch (error) {
            console.log("Error " + error)
        }
    }

    check("Adi")
}

/* ==================================================
TASK 4
Select an input and a button.
When button is clicked:
- read input value
- convert it to uppercase
- show it inside a paragraph
================================================== */
{
let btn = document.querySelector("button");
let input = document.querySelector("input");
let para = document.querySelector("p");

btn.addEventListener("click", () => {
    let text = input.value;
    para.innerText = text.toUpperCase();
});
}
/* ==================================================
TASK 5
Create a function that accepts another function
and a number.
Call the passed function after 2 seconds
and pass the number to it.
================================================== */
{
    function one(callback, number){
    setTimeout(() => {
        callback(number);
    }, 2000);
    }

    function square(number){
        console.log(number * number);
    }

    one(square, 4);
}


/* ==================================================
TASK 6
Create an async function that:
- waits 1 second
- prints "Loading..."
- waits another 1 second
- prints "Loaded"
================================================== */
{
    function one(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Loading")
        }, 1000);
    })
    }

    function two(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Loaded")
        }, 1000);
    })
    }

    async function three(){
        let a = await one();
        console.log(a);

        let b = await two();
        console.log(b);
    }

    three();
}

/* ==================================================
TASK 7
Create an object with properties:
name, age, isStudent

Create a function that:
- checks age
- prints "Adult" or "Minor"
================================================== */
{
    let user = {
        name : "Aditya",
        age : 21,
        isStudent : true
    }

    function checkAge(name, age, student){
        if(user.age>18){
            console.log("Adult");
        } else {
            console.log("Minor");
        }
    }

    checkAge(user);
}
/* ==================================================
TASK 8
Create a fake API function that:
- returns a promise
- resolves after 2 seconds
- returns an array of 3 usernames

Use async/await to print them one by one.
================================================== */
{
  function fakeAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Aditya", "Ritesh", "Bhavya"]);
      }, 2000);
    });
  }

  async function showUsers() {
    let users = await fakeAPI();
    console.log(users);
  }

  showUsers();
}

/* ==================================================
TASK 9
Create a form.
On submit:
- stop page refresh
- wait 1 second
- print "Form processed"
================================================== */
{
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   setTimeout(() => {
    console.log("Form procesing");
   }, 1000);
})
}

/* ==================================================
TASK 10 (Challenge)
Create a flow:
startProcess → validateData → finishProcess

Rules:
- startProcess always runs
- validateData may fail
- if it fails, stop everything
- if success, finishProcess runs

Use async/await + try/catch.
================================================== */
{
  function startProcess() {
    return new Promise((resolve) => {
      resolve("Start Process");
    });
  }

  function validateData(isValid) {
    return new Promise((resolve, reject) => {
      if (isValid) {
        resolve("Data Valid");
      } else {
        reject("Validation failed");
      }
    });
  }

  function finishProcess() {
    return new Promise((resolve) => {
      resolve("Finish Process");
    });
  }

  async function run() {
    try {
      console.log(await startProcess());
      console.log(await validateData(false)); // change to true to succeed
      console.log(await finishProcess());
    } catch (error) {
      console.log("Error:", error);
    }
  }

  run();
}

/* ==================================================
TASK 1
Using map:
Convert an array of numbers into an array
where each number is multiplied by 3.
================================================== */
{
    const array = [1, 2, 3, 4, 5];

    const newArray = array.map((array) => {
        return array * 3
    });

    console.log(newArray);
}

/* ==================================================
TASK 2
Using filter:
From an array of numbers,
return only the even numbers.
================================================== */
{
    const array = [1, 2, 3, 4, 5];

    const newArray = array.filter((array) => {
        return array % 2 == 0;
    });
    console.log(newArray);
}

/* ==================================================
TASK 3
Using reduce:
Calculate the total sum of all numbers
in an array.
================================================== */
{
    const array = [1, 2, 3, 4, 5];

    const newArray = array.reduce((array, total) => {
        return total + array;
    }, 0);

    console.log(newArray);
}

/* ==================================================
TASK 4
Using map:
From an array of user objects,
return a new array containing only usernames.

Example:
[{name:"A"}, {name:"B"}] → ["A", "B"]
================================================== */
{
    const users = [{name : "Aditya"}, {name : "Ritesh"}, {name : "Bhavna"}];

    const newArray = users.map((users) => {
        return users.name
    })

    console.log(newArray);
}

/* ==================================================
TASK 5
Using filter:
From an array of user objects,
return only users whose age is above 18.
================================================== */
{
    const users = [
        { name: "Aditya", age: 21 },
        { name: "Bhavna", age: 14 },
        { name: "Ritesh", age: 24 }
    ];

    const newArray = users.filter((users) => {
        return users.age > 18;
    })

    console.log(newArray);
}
/* ==================================================
TASK 6
Using reduce:
From an array of numbers,
find the maximum number.
================================================== */
{
    const array = [1, 2, 3, 4, 5];

    const maxNumber = array.reduce((max, current) => {
        return current > max ? current : max;
    }, array[0]);

    console.log(maxNumber); 
}

/* ==================================================
TASK 7
Using map:
Convert an array of strings
into an array of their lengths.
================================================== */
{
    let array = ["Aditya", "Bhvya", "Ritesh"];

    const newArray = array.map((array) => {
        return array.length;
    });

    console.log(newArray);
}
/* ==================================================
TASK 8
Using filter:
From an array of strings,
return only strings that contain
more than 4 characters.
================================================== */
{
    const array = ["Aditya", "Bha", "Rite"];

    const newArray = array.filter((array) => {
        return array.length>4;
    })

    console.log(newArray);
}

/* ==================================================
TASK 9
Using reduce:
From an array of numbers,
count how many numbers are greater than 50.
================================================== */
{
    const array = [1, 265, 3, 489, 5];

    const newArray = array.reduce((count, array) => {
        if(array > 50) {
            return count + 1;
        }
        return count;
    }, 0);

    console.log(newArray);
}

/* ==================================================
TASK 10 (Challenge)
Using map + filter + reduce:
From an array of user objects:
- keep only active users
- get their salaries
- calculate total salary
================================================== */
const users = [
    { name: "Aditya", status: "Active", salary: 45000 },
    { name: "Ritesh", status: "InActive", salary: 45000 },
    { name: "Bhavna", status: "Active", salary: 45000 }
];

const totalSalary = users
    .filter(user => user.status === "Active")
    .map(user => user.salary)
    .reduce((total, salary) => total + salary, 0);

console.log(totalSalary);

/* ==================================================
TASK 1 (Variables)
- Create a variable called name
- Store your name in it
- Create a variable called age
- Print: "My name is ___ and I am ___ years old"
================================================== */

{
    let name = "Aditya";
    let age = 21;

    console.log("My name is " + name + " and I am " + age + " years old.");
}

/* ==================================================
TASK 2 (Functions)
- Create a function called greet
- It should take one parameter: name
- It should return: "Hello, <name>!"
================================================== */

{
    function greet(name){
        return "Hello, " + name;
    };

    console.log(greet("Aditya"));
}

/* ==================================================
TASK 3 (If / Else)
- Create a function called checkAge
- It takes age as a parameter
- If age is 18 or more, return "Adult"
- Otherwise, return "Minor"
================================================== */

{
    function checkAge(age){
        if(age >= 18){
            return "Adult";
        } else {
            return "Minor";
        }
    }

    console.log(checkAge(21));
}

/* ==================================================
TASK 4 (Loops)
- Use a for loop
- Print numbers from 1 to 5
- Each number should be printed separately
================================================== */

{
    const array = [1, 2, 3, 4, 5];

    for(i=0; i<array.length; i++){
    console.log(array[i]);
  };
}

/* ==================================================
TASK 5 (Arrays)
- Create an array called fruits
- Add 3 fruit names
- Print the first fruit
- Print the last fruit
================================================== */

{
    const fruits = ["apple", "banana", "mango"];

    console.log(fruits[0]);
    console.log(fruits[2]);
}

/* ==================================================
TASK 6 (Array + Loop)
Given this array:
const numbers = [1, 2, 3, 4, 5]

- Use a loop
- Print each number multiplied by 2
================================================== */

{
    const numbers = [1, 2, 3, 4, 5];

    for(i=0; i<numbers.length; i++){
        console.log (numbers[i] * 2);
    };
}

/* ==================================================
TASK 7 (Objects)
- Create an object called user
- Properties: name, age, isStudent
- Print: "<name> is <age> years old"
================================================== */

{
    const user = {
        firstName : "Aditya",
        age : 21,
        isStudent : true
    };

    console.log(`${user.firstName} is ${user.age} years old`);
}

/* ==================================================
TASK 8 (Functions + Arrays)
- Create a function called sumArray
- It takes an array of numbers
- It returns the total sum
================================================== */

{
    const arrayNum = [1, 2, 3, 4, 5];
    
    function sumArray(array){
        let total = 0;
        for(i = 0; i < array.length; i++){
            total = total + array[i];
        } return total;
    }

    console.log(sumArray(arrayNum));
}

/* ==================================================
TASK 9 (Callbacks)
- Create a function called doSomething
- It takes one parameter: callback
- Inside the function, call the callback
================================================== */

{
    function doSomething(callback){
    return callback();
    }

    function greet(){
        console.log("hello");
    }

    doSomething(greet);
}


/* ==================================================
TASK 10 (Async Basics)
- Use setTimeout
- Print "Hello after 2 seconds"
================================================== */

{
    function greet(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Hello");
            }, 2000);
        })
    }

    greet();
}

/* ==================================================
TASK 11 (Variables + Logic)
- Create two variables: a and b
- Swap their values WITHOUT creating a third variable
- Print the result
================================================== */



/* ==================================================
TASK 12 (Functions + Conditions)
- Create a function called isEven
- It takes a number
- Returns true if even, false if odd
================================================== */



/* ==================================================
TASK 13 (Loops + Arrays)
- Given an array of numbers
- Create a new array that contains only numbers greater than 3
- Use a loop (NOT filter)
================================================== */



/* ==================================================
TASK 14 (Objects + Arrays)
Given this array:
const users = [
  { name: "Aman", age: 17 },
  { name: "Riya", age: 22 },
  { name: "Karan", age: 19 }
];

- Print names of users who are 18 or older
================================================== */



/* ==================================================
TASK 15 (Functions + Arrays)
- Create a function called findMax
- It takes an array of numbers
- It returns the largest number
================================================== */



/* ==================================================
TASK 16 (Callbacks - Real Use Case)
- Create a function called processData
- It takes two parameters: data, callback
- Inside the function, pass data to callback
================================================== */



/* ==================================================
TASK 17 (Array Methods - map)
- Given an array of numbers
- Create a new array where each number is squared
- Use map()
================================================== */



/* ==================================================
TASK 18 (Array Methods - filter)
- Given an array of numbers
- Create a new array with only odd numbers
- Use filter()
================================================== */



/* ==================================================
TASK 19 (Array Methods - reduce)
- Given an array of numbers
- Calculate the total sum using reduce()
================================================== */



/* ==================================================
TASK 20 (Async Thinking)
- Create a function called delayedMessage
- It should print "Done!" after 1 second
- Use setTimeout
================================================== */
