// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//  function squareR (a, b){
//     let result = (a * b);
//     return result;
// }
// let answer = squareR(20, 10);
// console.log(answer);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle (r){
//    let result = (3.14 * r * r );
//    return result;
// }
// let answer = areaCircle(5)
// console.log(answer);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//  function areaCylinder (r, h){
//    let result = (2 * 3.14 * r * h );
//    return result;
// }
// let answer = areaCylinder(5,5)
// console.log(answer);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function iterator (array){
//     for (let item of array) {
//        console.log(item) ;
//     }
// }
// iterator([3,7,8,2]);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function texCreator (text) {
//     document.write(`<p>${text}</p>`);
// }
// texCreator('hello my dear friend');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listCreator(text){
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// listCreator('some text');

// / - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulCreatore (text){
//     document.write('<ul>')
//     for (i =0; i < 3; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>')
// }
// ulCreatore('hello okten');
//

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,false,'hello',true];
// function iterator1(array) {
// document.write(`<ul>`);
// for(let i = 0; i < array.length; i++){
//     document.write(`<li>${array[i]}</li>`);
// }
// document.write(`</ul>`);
// }
// iterator1(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users =[
//     {
//      id: 1,
//      name: 'vasya',
//      age: 28
//     },
//     {
//         id: 2,
//         name: 'petya',
//         age: 30
//     },
//     {
//         id: 3,
//         name: 'ihor',
//         age: 27
//     },
// ];
//     function iterator (array){
//         for (let user of users) {
//             document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//         }
//
//         }
//
// iterator(users);


// - створити функцію яка повертає найменьше число з масиву
// let numbers = [2, 4, 8, -3, 1];
// function minNum(array) {
//     let min = array[0];
//     for (let minElement of array) {
//      if (minElement< min) {
//      min = minElement
//      }
//     }
//     return min;
// }
// console.log(minNum(numbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [1,2,10];
// function calc(numbers) {
//     let result = 0;
//     for (let number of numbers) {
//        result = result + number;
//     }
//     return result;
// }
// console.log(calc(numbers));