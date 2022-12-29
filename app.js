
// 1. Objects
const laptop = {
    model: 'xxx',
    color: 'white'
}
// console.log(laptop.model);

// 2. Variables Var, let, Const, OR variable stores any types of data
// let language = 'javascript';  // First method
let language;                   // Second method
language = 'javascript';
// console.log(language);

// const variable cannot be changed value
// const secondInMinutes = 60;
// secondInMinutes = 30;

// function scope
var abc = 'javascript';

// block Scope
function hello() {
    // example block
}

if(true) {
    let age = 25;
    // const age  = 25;
    // var age  = 25;
    // console.log(age);
}

//  Hoisting
// console.log(greeting);
var greeting = 'hello';
// undefined


// var, let, const ????
const num = 40;
// num = 20;

// 

//  console.log(num);

// Data Types
// let age = 25;
// age = 'Twentyfive';
// console.log(age);

// Premitive Data types
// 1. Number
let age =  25;
let temo =  -25;
let price =  50.50;

// 2. String
let name = 'Ahmed';

// 3. Boolean
// true / false
// let isLoggedIn = true;
// let hasPermission = false;

// 4. undefined
// let defined;
// console.log(defined)

// 5. BigInt
// 6. Symbol
// Unique

// Structural Type
// 1. Object
    // 1.1 Function
    // Non-data structure
    // callable
    // 1.2 Arrays
    // collection of values
    // const numbers = [2, 3, 4, 'Javascript', 'Python', {name: 'Rakesh'}]; 
    // 1.3 Maps
    // 1.4 Set
    // 1.5 Date

// 3. Structural root
// 1. Null (emapty value)


/*
1. Assignment operators
2. Comparison operators
3. Arithemetic operators
4. Bitwise operators
5. Logical operators
6. String operators
7. Conditional (ternary) operators
8. Comma operators
9. Unary operators
10. Relational operators
*/

// Assignment operators
// let x = 10;
// let y;
// y = x;
// console.log(y);

// Compound operators
  
// let x = 10;
// let y = 20;

// x = x  + y;

// x += y;  x = x  + y
// x -= y;  x = x  - y
// x *= y;  x = x  * y
// x /= y;  x = x  / y

// console.log(x); 

// Airthmetic Operators

// +, -, *, /, **,

// let x = 10;
// let y = 20;
 
// x = x + 1;
// x += 1;

// x++; // increament
// x--; // decreament

// let x = 10;

// console.log(x ** 3); 

// Logical Operators
// 1. Logical AND &&
// let happy = true && true;
// console.log(happy);

// const isLoggedIn = true;
// const hasPermission = true;
// example:-
// if(isLoggedIn && hasPermission) {
//     // Delete Item
//     console.log('Item deleted successfully');
// }else{
//     console.log('Something went wrong!');
// }

// 2. Logical OR || 
// const happy =  true || false;
// console.log(happy);
// example:-
// const isLoggedIn = true;
// const hasPermission = true;

// if(isLoggedIn || hasPermission) {
//     // Delete Item
//     console.log('Item deleted successfully');
// }else{
//     console.log('Something went wrong!');
// }

// 3. Logical Not !
// const happy = false;
// console.log(!happy); 

// examaple:-
// const animal = 'cat';
// console.log(!animal);

// const isLoggedIn = true;

// if(!isLoggedIn) {
//     console.log('Welcome To Dashboard');
// }else{
//     console.log('Redirect to Login Page!');
// }

// Conditional operators (Ternary operators)
// const userRole = 'admin';

// if(userRole === 'admin') {
//     console.log('You are an admin');
// }else{
//     console.log('You are not an admin');
// }

// condition ? '' : '';

// userRole === 'admin' ? console.log('You are an admin') : console.log('You are not an admin');

// Comparision operators 
// Equal (==)
// Not equal (!=)
// Strict equal (===)
// Strict not equal (!==)
// Greater than (>)
// Greater than or equal (>=)
// Less than (>)
// Less than or equal (<=)

// equal
// console.log(4 == 4);

// not equal
// console.log(4 != 5);

// Strict equal (if dataType is not same result is false otherwise true)
// console.log(4 === '4');

// Note:- coercion (dataType manupulating proccess).

// Greater Than
// console.log(4 > 5);  

// Greater Than Or Equal
// console.log(6 >= 5);

// Less Than 
// console.log(6 < 5);

// example:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
// console.log(3 + 10 * 2); //23
// console.log( (3 + 10) * 2); //16

// console.log(3 > 2 && 2 > 1); // true
// console.log(3 > 2 > 1); // true


// Arrays & loops:- The Array object is used to store multiple values in a single variable. 
// const languages = ['javascript','python','c'];
// Lenghth
// console.log(languages.length);
// languages.unshift('java');
// languages.push('dart');
// languages.pop();
// languages.shift();
// console.log(languages);

// Loop:-
// for(let i = 0; i < 4; i++) {
//     console.log('*');
// }

// const actors = [
//     {
//         name: "Actor 1",
//         payment: 100
//     },

//     {
//         name: "Actor 2",
//         payment: 200
//     },

//     {
//         name: "Actor 3",
//         payment: 150
//     }
// ];

// for (let i = 0; i < actors.length; i++) {
//     actors[i].payment = actors[i].payment -10;
// }
// console.log(actors);

// Foreach:-
// actors.forEach((actor) => {
//     actor.payment = actor.payment -10;
// });

// console.log(actors);

// ForOf:-
// for(let actor of actors){
//     actor.payment = actor.payment -10;
// }

// console.log(actors);

// Filter:-

// const students = [
//     {
//         name: "student 1",
//         marks: "45"
//     },

//     {
//         name: "student 2",
//         marks: "60"
//     },

//     {
//         name: "student 3",
//         marks: "35"
//     },
// ];

// const failed = students.filter((student) => student.marks < 45 );
    
    // return student.marks < 45;
    
    // if(student.marks < 45){
    //     return true;
    // }
    // else{
        //     return false;
    // }

    // if(student.marks < 45){
    //     return true;
    // }
    //     return false;
// });
// console.log(failed);

// Map:-
// const users = [
//     {
//         fname: 'John',
//         lname: 'Doe'
//     },

//     {
//         fname: 'Jane',
//         lname: 'Doe'
//     }
// ];

// const finalUsers = users.map((user) => {
//     return{
//         fullname: `${user.fname} ${user.lname}` 
//     }
// });
// console.log(finalUsers);

// Reduce:-

// const movies = [
//     {
//         name: 'hera Pheri',
//         budget: 100
//     },
//     {
//         name: 'three idiots',
//         budget: 200
//     },
//     {
//         name: 'Spider men',
//         budget: 300
//     }
// ];

// let total = 0;

// movies.forEach((movie) => {
//     total += movie.budget;
// });

// console.log(total);

// const total = movies.reduce((acc, movie) => {

//     acc = acc + movie.budget;
//     return acc;

// }, 0);

// console.log(total);

// indexof 
// const admins = [2, 1, 5];

// const user = {
//     name: 'XYZ',
//     id: 5
// }
// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);

// includes
// const admins = [2, 1, 5];
// const user = {
//     name: 'XYZ',
//     id: 5
// }

// console.log(admins.includes(user.id));

// Find
// const users = [
//     {
//         name: 'xyz',
//         id: 1
//     },
//     {
//         name: 'abc',
//         id: 2
//     },
//     {
//         name: 'pqr',
//         id: 3
//     }
// ]


// const myuser = users.find((user) => {
//     return user.name === 'pqr'; 
//     // if(user.id === 3){
//     //     return true
//     // }
//     // return false;
// });

// console.log(myuser);


// Sort:-
// const names = ['john','jane','saim','ahmed','Aun', 'Sameer','Raheel'];
// names.sort();
// console.log(names);

// Splice
// const names = ['john','jane','saim','ahmed','Aun', 'Sameer','Raheel'];
// names.splice(2, 2);
// console.log(names);

// const names = ['john','jane','saim','ahmed','Aun', 'Sameer','Raheel'];
// names.shift('Ahmed Raza');
// console.log(names);

// Function:-

// function login(username, password) {
   
//     // Logic
//     console.log(password);
//     // console.log(`${username}, Logged in successfully`);
// }

// login('john','secret');
// login('jane');

// function upperCase(str){
//     // function by default return undefined 
//     return str.toUpperCase();
//     // console.log(str.toUpperCase());
// }
// const result = upperCase('javascript');
// // upperCase('javascript);
// console.log(result);

//  Default parameters
// function calculateArea(width, height = 1) {
//     const area = width * height;
//     return area;
// }
// const area = calculateArea(30);
// console.log(area); 

// variable scope

// const fileName = 'xyz.pdf';
// function download() {
//     console.log(fileName);
// }

// download();

// Function declaration and function expression

// Declaration
// function login() {

// }

// Expression
// const login = function() {
//     console.log('Logged in');
// }
// login();

// Callback
// function formatText(text, formatCb) {
//     return typeof formatCb === 'function' ? formatCb(text) : text.toUpperCase();
//     // return text.toUpperCase();
// }

// const result = formatText('hello', function(text) {
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);

//  IIFE (Immediately invoked function expression)
// (function setup() {
//     console.log('Setup done!');
// }) ();

// Arrow function
// const login = (username, password) => {
//     console.log('Logged in'); 
// }
// login();

// const sum = (num1, num2) => num1 + num2;

// const result = sum(4, 5);

// console.log(result);

// Good practices

// Naming
// 1. show, get, calc 
// 2. One function - one action
// 3. function name should be descriptive  