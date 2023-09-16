"use strict";

// Завдання 1.

// Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які були введені.

// ------------------------------------------------------------------------------------------

// 1 спосіб

// let str =prompt('write the text')
// let spaces = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     spaces++;
//   }
// }
// console.log(spaces);

// 2 спосіб
//  let str =prompt('write the text')
// let spaces = str.split(" ").length - 1;
// console.log("Кількість пробілів: " + spaces);

// Завдання 2.

// Користувач вводить email. Потрібно перевірити дані на правильність введення.
//  Правильно введений email - це той, в якому міститься символ @.
//  Крім того символ @ не може бути на початку тексту або в кінці.

// Приклад правильно введених даних:

// student@ukr.net

// Приклад не правильно введених даних:

// @student.ukr.net

// student.ukr.net@

// student.ukr.net

// ------------------------------------------------------------------------------------------

// 1 спосіб

// let email = prompt("Enter your email:");
//     if (email.indexOf("@") === -1) {
//      console.log(`Email is unvalid`);
//       }
//     else if (email.indexOf("@") === 0|| email.indexOf("@") === email.length - 1 ) {
//       console.log("Email is unvalid");
//     }
//     else console.log("Email is valid");


// 2 спосіб

// let email = prompt("Enter your email:");

//  function chekingEmail(email) {
//     const atIndex = email.indexOf("@"); 
//     return (
//       atIndex > 0 && 
//       atIndex < email.length - 1 &&
//       email.includes("@")
//     );
// }

// if (chekingEmail(email)) {
//   console.log("Email is valid");
// } else {
//   console.log("Email is invalid");
// }






// Завдання 3.

// Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів).
//  Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.

// Приклад роботи:

// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.

// ------------------------------------------------------------------------------------------


// let text = 'Text html javascript html css';
// var words = text.split(" ");;
// let count = 0;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === "html") {
//     count++;
//   }
//   }
//   console.log(count);






// Завдання 4.

// Користувач вводить URL адреса в prompt в форматі http або https.
//  Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.

// Приклад роботи:

// Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.

// Користувач вводить: “http://www.w3schools.com” – в консоль виводиться w3schools.com.

// ------------------------------------------------------------------------------------------


// let url = prompt("Enter the  URL address:");

// if( url.includes('ps://') ){
// console.log( url.slice(8,url.length));
// }
// else if(url.includes('p://')) {
//   console.log( url.slice(7,url.length));
// }
