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
if(15<temperature<30){
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

let array = [1,2,3,4,5,]
for(i=0; i<array.length; i++){
    console.log(i)
}

/* TASK 4:
Create a function findLargest that takes two numbers
and prints the larger one. */

/* TASK 5:
Create an array of names.
Use a loop to print only names that have more than 4 characters. */

/* TASK 6:
Create an object called car with properties:
brand, model, year.
Print a sentence using the object values. */


