// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let newStr1 = str1.toLowerCase();
// console.log(newStr1);
// let str2 = 'LOREM IPSUM';
// let newStr2 = str2.toLowerCase();
// console.log(newStr2);
// let str3 = 'JAVASCRIPT IS COOL';
// let newStr3 = str3.toLowerCase();
// console.log(newStr3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str);
// console.log(str.length);
// let newStr = str.trim();
// console.log(newStr);
// console.log(newStr.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = str.split(' ');
// console.log(stringToarray);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let map = numbers.map(value => {
//     return value + '';
// });
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3];
// let sotrNamsAscending = nums.sort((n1,n2)=> n1 - n2);
// console.log(sotrNamsAscending);
// //
// let sotrNamsDescending = nums.sort((n1,n2)=> n2 - n1);
// console.log(sotrNamsDescending);


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((v1, v2) => v2.monthDuration - v1.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filterArray = coursesAndDurationArray.filter(function (course){
//     if (course.monthDuration > 5){
//         return true
//     }
// });
// console.log(filterArray);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let arrCards = [
//     {cardSuit: 'clubs', value: '6', color: 'black' },
//     {cardSuit: 'clubs', value: '7', color: 'black' },
//     {cardSuit: 'clubs', value: '8', color: 'black' },
//     {cardSuit: 'clubs', value: '9', color: 'black' },
//     {cardSuit: 'clubs', value: '10', color: 'black' },
//     {cardSuit: 'clubs', value: 'ace', color: 'black' },
//     {cardSuit: 'clubs', value: 'jack', color: 'black' },
//     {cardSuit: 'clubs', value: 'queen', color: 'black' },
//     {cardSuit: 'clubs', value: 'king', color: 'black' },
//     {cardSuit: 'diamond', value: '6', color: 'red' },
//     {cardSuit: 'diamond', value: '7', color: 'red' },
//     {cardSuit: 'diamond', value: '8', color: 'red' },
//     {cardSuit: 'diamond', value: '9', color: 'red' },
//     {cardSuit: 'diamond', value: '10', color: 'red' },
//     {cardSuit: 'diamond', value: 'ace', color: 'red' },
//     {cardSuit: 'diamond', value: 'jack', color: 'red' },
//     {cardSuit: 'diamond', value: 'queen', color: 'red' },
//     {cardSuit: 'diamond', value: 'king', color: 'red' },
//     {cardSuit: 'heart', value: '6', color: 'red' },
//     {cardSuit: 'heart', value: '7', color: 'red' },
//     {cardSuit: 'heart', value: '8', color: 'red' },
//     {cardSuit: 'heart', value: '9', color: 'red' },
//     {cardSuit: 'heart', value: '10', color: 'red' },
//     {cardSuit: 'heart', value: 'ace', color: 'red' },
//     {cardSuit: 'heart', value: 'jack', color: 'red' },
//     {cardSuit: 'heart', value: 'queen', color: 'red' },
//     {cardSuit: 'heart', value: 'king', color: 'red' },
//     {cardSuit: 'spade', value: '6', color: 'black' },
//     {cardSuit: 'spade', value: '7', color: 'black' },
//     {cardSuit: 'spade', value: '8', color: 'black' },
//     {cardSuit: 'spade', value: '9', color: 'black' },
//     {cardSuit: 'spade', value: '10', color: 'black' },
//     {cardSuit: 'spade', value: 'ace', color: 'black' },
//     {cardSuit: 'spade', value: 'jack', color: 'black' },
//     {cardSuit: 'spade', value: 'queen', color: 'black' },
//     {cardSuit: 'spade', value: 'king', color: 'black' },
//     {value: 'joker', color: 'black' },
//     {value: 'joker', color: 'red' },
// ];
// - всі шістки
// let arrFilter = arrCards.filter(function (card){
//     if (card.value == '6' ){
//         return true
//     }
// });
// console.log(arrFilter);

// - знайти піковий туз
// console.log(arrCards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));

// - всі червоні карти
// let arrFilter = arrCards.filter(function (value){
//     if (value.color === 'red' ){
//         return true
//     }
// });
// console.log(arrFilter);

// - всі буби
// let arrFilter = arrCards.filter(function (value){
//     if (value.cardSuit === 'diamond' ){
//         return true
//     }
// });
// console.log(arrFilter);

// - всі трефи від 9 та більше
// let arrFilter = arrCards.filter(function (value){
//     if (value.cardSuit === 'clubs' && value.value >= '9'){
//         return true
//     }
// })
// console.log(arrFilter);
