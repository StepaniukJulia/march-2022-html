// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(userId, userName, surname, email, phone){
//     this.userId = userId;
//     this.userName = userName;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
// let user1 = new User(1,'vasya','petrov','petrov@gmail.com',420971212111);
// let user2 = new User(2,'petya','pupkin','pupkin@gmail.com',420972121222);
// let user3 = new User(3,'olya','petrova','petrova@gmail.com',420972223334);
// let user4 = new User(4,'tanya','tanina','tanina@gmail.com',420973322222);
// let user5 = new User(5,'ihor','ivanov','ivanov@gmail.com',420972552222);
// let user6 = new User(6,'victor','mishun','mishun@gmail.com',420972777222);
// let user7 = new User(7,'andriy','andriychuk','andriychuk@gmail.com',420972222444);
// let user8 = new User(8,'roman','romaniuk','romaniuk@gmail.com',420972222333);
// let user9 = new User(9,'anna','anichkina','anichkina@gmail.com',420972222666);
// let user10 = new User(10,'katya','katina','katina@gmail.com',420972222777);
//
// let pushUser = function (...user) {
//     let arr = [];
//     arr.push(...user);
//     return arr;
// };
// let users = pushUser(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(users);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterArray = users.filter((user) =>{
//     if (user.userId % 2 === 0){
//      return true;
//     }else {
//      return false;
//     }
// });
// console.log(filterArray);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((u1,u2) => u1.userId - u2.userId));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class  Client{
//    constructor(id, name, surname, email, phone, order) {
//        this.id = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phone = phone;
//        this.order = order ;
//    }
// }
// let client1 = new Client(1,'vasya','petrov','petrov@gmail.com',420971212111,['tea','sugar']);
// let client2 = new Client(2,'petya','pupkin','pupkin@gmail.com',420972121222,['coffee','tomato','bread']);
// let client3 = new Client(3,'olya','petrova','petrova@gmail.com',420972223334,['pepper','milk','meat','tea']);
// let client4 = new Client(4,'tanya','tanina','tanina@gmail.com',420973322222,['banana','egg']);
// let client5 = new Client(5,'ihor','ivanov','ivanov@gmail.com',420972552222,['fish','potato','salt']);
// let client6 = new Client(6,'victor','mishun','mishun@gmail.com',420972777222,['pork','chicken']);
// let client7 = new Client(7,'andriy','andriychuk','andriychuk@gmail.com',420972222444,['butter','pasta','cheese','rice']);
// let client8 = new Client(8,'roman','romaniuk','romaniuk@gmail.com',420972222333,['tea','cocoa']);
// let client9 = new Client(9,'anna','anichkina','anichkina@gmail.com',420972222666,['jam']);
// let client10 = new Client(10,'katya','katina','katina@gmail.com',420972222777,['cookie','juice']);
//
// let pushClient = function (...client) {
//     let arr = [];
//     arr.push(...client)
//     return  arr
// }
// let clients = pushClient(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
// console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortArray = clients.sort((c1,c2) =>c2.order.length - c1.order.length);
// console.log(sortArray);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, yearOfRelease, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.yearOfRelease = yearOfRelease;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (let carElement in this) {
//             // console.log(`${carElement} ${this[carElement]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//        this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue){
//         this.yearOfRelease = newValue;
//     };
//     this.addDriver = function (driver){
//         this.driver = driver;
//     };
// }
//
//
// let car1 = new Car('С','mercedes',2015, 180,3)
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(50);
// car1.changeYear(2019);
// car1.addDriver('ihor');
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//     constructor(model, producer, yearOfRelease, maxSpeed, engineVolume) {
//   this.model = model;
//   this.produser = producer;
//   this.yearOfRealease = yearOfRelease;
//   this.maxSpeed = maxSpeed;
//   this.engineVolume = engineVolume;
//   }
//   drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//      };
//   info() {
//       for ( let item in this){
//        console.log(`${item} ${this[item]}`);
//       }
//
//   } ;
//   increaseMaxSpeed (newSpeed){
//       this.maxSpeed += newSpeed;
//   };
//   changeYear (newValue){
//       this.yearOfRealease = newValue;
//   };
//   addDriver (driver){
//       this.drive = driver;
//     };
// }
// let car1 = new Car('C', 'mercedes', 2020, 200, 4);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(50);
// car1.changeYear(2022);
// car1.addDriver('ihor');
// console.log(car1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella{
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
// let arrCinderella = [
//     new Cinderella('anna',25, 36),
//     new Cinderella('tanya',20, 37),
//     new Cinderella('olya',35, 35),
//     new Cinderella('katya',18, 38),
//     new Cinderella('vika',27, 39),
//     new Cinderella('masha',29, 40),
//     new Cinderella('sasha',31, 41),
//     new Cinderella('alina',24, 38),
//     new Cinderella('ira',22, 45),
//     new Cinderella('polina',32, 44),
//
// ];
// class Prince{
//     constructor(name, age, findShoe) {
//         this.name = name;
//         this.age = age;
//         this.findShoe = findShoe;
//     }
// }
// let prince1 = new Prince('ihor',28, 37);
// let find = (array,prince) =>{
//     for (let item of array) {
//         if(item.footsize === prince.findShoe){
//          return item.name
//
//         }
//     }
// };
// console.log(find(arrCinderella,prince1));
// let findCinderella = arrCinderella.find(value => value.footsize === prince1.findShoe )
// console.log(findCinderella);