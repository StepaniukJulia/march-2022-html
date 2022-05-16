// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// let textById = document.getElementById('content');
// console.log(textById.innerText);
//
// // -- отримує текст з блоку з id "rules"
// let txtRules = document.getElementById('rules');
// console.log(txtRules.innerText);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
// textById.innerText = 'some another text';
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// txtRules.innerText = 'some text';
//
// // -- змініть кожному елементу колір фону на червоний
//variant 1
// let allDivs = document.getElementsByTagName('div');
// for (let item of allDivs) {
//     item.style.background = 'red';
// }
// let allParag = document.getElementsByTagName('p');
// for (const allParagElement of allParag) {
//     allParagElement.style.background = 'red';
// }
// let allUl = document.getElementsByTagName('ul');
// for (let allUlElement of allUl) {
//     allUlElement.style.background = 'red';
// }
//variant 2
// let children = document.body.children;
// console.log(children);
// for (let child of children) {
//     console.log(child);
//     child.style.background = 'red';
//
// }

// // -- змініть кожному елементу колір тексту на синій
// let allElements = document.querySelectorAll('*');
// for (const allElement of allElements) {
//     allElement.style.color = 'darkblue';
// }
//
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let allClassElement = document.getElementById('rules');
// console.log(allClassElement.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let textAllElements = document.getElementsByClassName('fc_rules');
// for (let textAllElement of textAllElements) {
//     textAllElement.style.color = 'red'
// }



// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let getById = document.getElementById('main_header');
// getById.className = 'main_header';

// b) робить шириниу елементу ul 400px
// let getUl = document.getElementsByTagName('ul');
// for (let ulElement of getUl) {
//     ulElement.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let allLinkList = document.getElementsByClassName('linkList')
// for (let allLinkListElement of allLinkList) {
//     allLinkListElement.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let getTxt = document.querySelector('.listElement2');
// console.log(getTxt.innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let allLi = document.getElementsByTagName('li')
// for (let allLiElement of allLi) {
//     allLiElement.style.background = 'grey'
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let getAElements = document.getElementsByTagName('a')
// for (let aElement of getAElements) {
//     aElement.className = 'anchor'
// }
// console.log(getAElements);


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// let getAElements = document.getElementsByTagName('a')
// for (let aElement of getAElements) {
//     if (aElement.innerText === 'link3'){
//         aElement.style.fontSize = '40px'
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let getAElements = document.getElementsByTagName('a')
// for (let aElement of getAElements) {
//     aElement.className = `element${aElement.innerText}`
//     console.log(aElement);
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let allSubEl = document.getElementsByClassName('sub-header');
// let color = prompt('enter color');
// for (let allSubElElement of allSubEl) {
//     allSubElElement.style.background = color;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let getColor = prompt('enter color');
// let allSubEl = document.getElementsByClassName('sub-header');
// for (let allSubElElement of allSubEl) {
//     if(allSubElElement.innerText === 'content 2 segment'){
//         allSubElElement.style.color = getColor;
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let getText = prompt('enter text');
// let getContent1 = document.getElementsByClassName('content_1')
// for (let content1Element of getContent1) {
//     content1Element.innerText = getText
// }

// l) отримати елементи p та змінити їм padding на 20px
// let allP = document.getElementsByTagName('p');
// for (let allPElement of allP) {
//     allPElement.style.padding = '20px'
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let getText2 = document.getElementsByClassName('text2');
// for (let text2Element of getText2) {
//     text2Element.innerText = 'sep-2021';
// }