
// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
// }

// function register(callback){
//     setTimeout(() => {
//         console.log('Register End');
//         callback();
//     }, 2000);
// }

// function sendEmail(callback){
//     setTimeout(() => {
//         console.log('Email End');
//         callback();
//     }, 3000);
// }

// function login(callback){
//     setTimeout(() => {
//         console.log('Login End');
//         callback();
//     }, 4000);
// }

// function getUserData(callback){
//     setTimeout(() => {
//         console.log('Got User Data');
//         callback();
//     }, 1000);
// }

// function displayUserData(){
//     setTimeout(() => {
//         console.log('User Data Displayed');
//     }, 1000);
// }

// // callback hell (nesting)
// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });
//         });
//     });
// });

// console.log('other application work!');