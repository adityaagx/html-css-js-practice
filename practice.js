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
    // your code here
}


/* =====================
TASK 5
Same as Task 4, but this time
use a callback to multiply the numbers.
===================== */
{
    // your code here
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
    // your code here
}


/* =====================
TASK 7
Create a function named repeat
that takes a callback and a number n.
Call the callback n times.
===================== */
{
    // your code here
}


/* =====================
TASK 8
Create a function named greetAfterDelay
that takes a callback.
Use setTimeout to call the callback
after 2 seconds.
===================== */
{
    // your code here
}


/* =====================
TASK 9
Create a function fetchData
that simulates fetching data using setTimeout.
After 1 second, call a callback
with the message "Data received".
===================== */
{
    // your code here
}


/* =====================
TASK 10
Create a function calculateSquare
that takes a number and a callback.
The callback should receive the square
and print it.
===================== */
{
    // your code here
}


/* =====================
TASK 11 (Real-world style)
Create a function loginUser
that takes username, password, and a callback.
If username === "admin", call callback with "Login successful".
Else call callback with "Login failed".
===================== */
{
    // your code here
}


/* =====================
TASK 12
Create a function downloadFile
that uses setTimeout (3 seconds).
After download, call a callback that logs
"Download complete".
===================== */
{
    // your code here
}


/* =====================
TASK 13
Create a function performOperation
that takes a, b, and a callback.
Use callback to subtract a and b.
===================== */
{
    // your code here
}


/* =====================
TASK 14 (Advanced thinking)
Create a function stepOne(callback)
that logs "Step 1 completed"
then calls callback.

Create stepTwo(callback)
that logs "Step 2 completed"
then calls callback.

Call them in sequence using callbacks.
===================== */
{
    // your code here
}


/* =====================
TASK 15 (Callback Hell intro 😈)
Create three functions:
first(callback)
second(callback)
third()

Each function should use setTimeout
and print:
"First done" → after 1 sec
"Second done" → after 1 sec
"Third done"

Call them in order using callbacks.
===================== */
{
    // your code here
}
