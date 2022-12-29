// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
// }

// function register(){
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             // return reject('Error registering');
//             console.log('Register End');
//             resolve('success'); 
//         }, 2000);  
//     });
// }

// function sendEmail(){
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             // return reject('error while sending Email');
//             console.log('Email End');
//             resolve();
//         }, 3000);
//     });
// }

// function login(){
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login End');
//             resolve();
//         }, 3000);
//     });
// }

// function getUserData(){
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             console.log('Got user data');
//             resolve();
//         }, 1000);
//     });
// }

// function displayUserData(){
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             console.log('displayed user data');
//             resolve();
//         }, 2000);
//     });
// }

// // callback hell (nesting)
// // register(function(){
// //     sendEmail(function(){
// //         login(function(){
// //             getUserData(function(){
// //                 displayUserData();
// //             });
// //         });
// //     });
// // });


// // register()
// // .then(sendEmail)
// // .then(login)
// // .then(getUserData)
// // .then(displayUserData)
// // .catch((error) => {
// //     console.log( error);
// // });

// // Async await

// async function authenticate() {
//     try{
//         const message = await register(); 
//                         await sendEmail();
//                         await login();
//                         await getUserData();
//                         await displayUserData();
//                         console.log(message);
//     }catch(err){
//         console.log(err);
//     }
// }

// authenticate().then(() => {
//     console.log('All set!');
// });
// // .catch((err)=>{
// //     console.log(err);
// // });
// console.log('other application work!');