// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [7, 2, 4, 5, 9, 3];
// let sumN = (array)=>{
//     let result = 0;
//     for (let number of numbers) {
//         result = result + number / numbers.length;
//     }
//     return result;
// }
// console.log(sumN(numbers));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minmaxNam = (array)=>{
// let min = array[0];
// let max = array[0];
//     for (let item of array) {
//         if (item > max) max = item;
//         else if  (item < min) min = item;
//     }
//     console.log('max', max);
//     return min;
// }
// console.log(minmaxNam([4, 6, 1, -8, 9]));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomNum =(array)=>{
//   let arr = [];
//     for (let i = 0; i < 100; i++) {
//          arr.push(Math.floor(Math.random()* 100));
//     }
//     return arr
// };
// console.log(randomNum( ));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomNum =(value,limit)=>{
//   let array = [];
//     for (let i = 0; i < limit; i++) {
//          array.push(Math.floor(Math.random()* 50));
//     }
//     return array
// };
// console.log(randomNum(9,20 ));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let numbers = [1, 2, 3];
// let arr = (array)=> {
//     let newArray = []
//     for (let i = array.length - 1; i >= 0; i--){
//         let item = array[i]
//         newArray.push(item)
//     };
//     return newArray
// };
// console.log(arr(numbers));

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let squareR = (a, b)=> a * b
// console.log(squareR(20,10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let areaCircle = (r)=> 3.14 * r * r
// console.log(areaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let areaCilinder = (r, h)=> 2 * 3.14 * r * h
// console.log(areaCilinder(5, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = (array)=>{
//     for (let item of array) {
//     console.log(item);
//     }
// }
// arr([2,5,7]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par =(text) =>{
//     document.write(`<p>${text}</p>`);
// }
// par('hello my friend');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulCreatore =(text) =>{
// document.write(`<ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//               </ul>`)
// }
// ulCreatore('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulC =(text,size) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(` <li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// ulC('hello',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let data = (array) =>{
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// data([2, 'hello', true, 3, false]);

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
// let data = (array)=>{
//     for (let user of users) {
//        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
// data(users);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [5, 2, -4, 7];
// let minNam = (array)=>{
// let min = array[0]
//     for (let item of array) {
//         if (item < min){
//         min = item
//         }
//     }
//     return min;
// }
// console.log(minNam(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1, 2, 10];
// let calc =(array)=>{
//     let result = 0;
//     for (let item of array) {
//      result = result + item ;
//     }
//     return result;
// }
// console.log(calc(arr));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
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
//   ];
// let arr = (array)=>{
//     for (let i = array.length - 1; i >= 0; i--) {
//         let user = array[i];
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
//
// }
// arr(users);