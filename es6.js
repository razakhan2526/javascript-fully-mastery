// ES6 AKA Ecmascript 2015

// var let const

// var is function scope
// let is block scope

// Block Scope 
// let ages = 18
// if(ages >= 18){
//     let driving = true;
//     console.log(driving)
// }

// // Function Scope
// function register() {
//     var username = 'Ahmed';
//     var password = 'raza';
// }
// console.log(username)

// // var overwrite to other same variable
// var product = 'laptop';
// var product = 'mobile';

// console.log(product);


// function greet(){
//     console.log('Good morning');
// }
// greet();

// const addition = a => console.log(a+a);
// addition(2,5);

// console.log(this);

// const shop = {
//     purchase:() => {
//         console.log(this);
//     },
// };
// shop.purchase();

// const myButton = document.querySelector('#mybutton');

// const shop = {
//     price: 100,
//     buy: function() {
//         // const self = this;
//         myButton.addEventListener('click', () => {
//             // console.log(this)
//             console.log('I spent ' + this.price);
//         });
//     },
// }
// shop.buy();

// template literals
// const firstName = 'Ahmed';
// const lastName = 'Raza';

// console.log(firstName + ' ' + lastName);

// hello
// how are you

// const message = 'hello \n' + 'how are you';

// const message = `hello
// how are you`;

// console.log(message);

// Enhanced object litrals
// computed property keys
// Method defination shorthand
// property shorthand

// const KeyName = 'name';
// const product = {
//     buy(){
//         console.log(Bought);
//     }


//     // [KeyName]: 'Mobile',
//     // name: 'Mobile',
//     // price: '100',
// };

// console.log(product.buy);

// const acessToken = 'kjlhgfdsafghjkl';
// const refreshToken = 'kjlhgfdsafghjkl';

// const user = {
//     acessToken,
//     refreshToken,
// };
// console.log(user);

// Destructuring
// const user = {
//     name: 'Ahmed Raza',
//     age: 30,
// };

// const {name:fullname, age: myage} = user;
 
// console.log(myage);

// const data = ['Ahmed', 30, 'Developer'];
// const [name, age, profession] = data

// console.log(name);

// Default parameters

// const register = (name, password, image = 'test.png') => {
//     // const img = image || 'test.png';
//     console.log(name, password, image);
// }
// register('Ahmed','secret');

// Spread ...
// const languages = ['c','c+ +','javascript'];
// const newlanguages = [...languages, 'typescript'];

// console.log(newlanguages);

// const settings = {
//     volumn: 10,
//     brightness: 80
// };

// const newSettings = {...settings.volumn = 20};

// // newSettings.volumn = 20;

// console.log(settings.volumn);

// Rest
// const addItem = (...item) => {
//     console.log(item);
// }

// addItem(3, 2, 4);

// function sum(...args){
//     let result = 0;
//     for(let i=0; i<args.length; i++){
//         result += args[i];
//     }
//     console.log(result);
// }
// sum();

// For of loop
// Array, string, Object
// const numbers = [2, 4, 5, 7];

// for (const num of numbers) {
//     console.log(num);
// }


// const strings = 'Ahmed Raza';

// for (const stri of strings) {
//     console.log(stri);
// }

// const person = {
//     name: 'Ahmed',
//     city: 'karachi',
//     brand: 'apple',
// };

// for(const [key, value] of Object.entries(person)){
//     console.log(key, value);
// }

// Promises
// function login(cb) {
//     setTimeout( () => {
//         console.log('Login..');
//         cb();
//     }, 0);
// }
// login(() => {
//     console.log('Redirecting');
// });
// function login(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login...');
//             reject();
//         }, 0);
//     });
// }
// login()
// .then(() => {
//     console.log('Redirecting');
// })
//  .catch((err) => {
//     console.log('Error...');
// });

// Find Method
// const users = [
//     {
//         name: 'Ahmed'
//     },

//     {
//         name: 'Raza'
//     }
// ];
// const user = users.find(function(user){
//     return user.name === 'Raza';
// });

// console.log(user);

// const users = [
//     {
//         name: 'Ahmed'
//     },

//     {
//         name: 'Raza'
//     }
// ];

// const user = users.findIndex(function(user){
//         return user.name === 'Raza';
// });

// console.log(user);

// Set
// const uniqueNUmbers = new Set();
// uniqueNUmbers.add(3);
// uniqueNUmbers.add(5);
// uniqueNUmbers.add(6);
// uniqueNUmbers.add(3);

// console.log(uniqueNUmbers.has(10));

// const numbers = [4, 5, 6, 4, 7, 6];
// const uniqueNUmbers =  new Set(numbers);
// console.log(uniqueNUmbers);

// map (Hashtables)
// const urls = new Map();
// urls.set('development', 'dev.example.com');
// urls.set('production', 'prod.example.com');
// console.log(urls.get('development'));

// const urlsObj = {
//     development: 'dev.example.com',
//     production: 'prod.example.com',
// }
// console.log(urlsObj.development);


// for (const [key, value] of urls) {
//     console.log(key, value);
// }

// classes
// function Person(name) {
//     this.name = name;
// }

// const ahmed = new Person('Ahmed');

// console.log(ahmed);

// class Person { 
//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log('Good morning');
//     }
// }

// class GreatPerson extends Person {
//     attitude = 'cool';

//     greet() {
//         console.log('Good Evening');
//     }
// }

// const john = new GreatPerson('john');
// console.log(john.greet());

// const ahmed = new Person('Ahmed Raza');
// const raza = new Person('Ahmed Raza khan');
// raza.name = 'Saim';
// console.log(ahmed.greet());