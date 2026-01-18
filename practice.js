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

