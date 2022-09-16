// const myName = 'ASDFGHJKLZXCVBNMQWERTYUIOP';
// console.log(typeof myName.length)
// console.log(typeof myName, myName.length)
// let shortName = myName.slice(0, 2)
// console.log(shortName)
// let subName = myName.substring(0, 2)
// console.log(subName)
// let sliceValue = myName.slice(12, 16)
// console.log(sliceValue)
// let subStringValue = myName.substring(12, 16)
// console.log(subStringValue)
// let subStrValue = myName.substr(0, 5)
// console.log(subStrValue)
// let text = 'Please visit Microsoft!'
// console.log(text.slice(0, 6))
// let newText = text.replace('Microsoft', 'W3school')
// console.log(newText)
// console.log(text)
// let tooUpperCase = text.toUpperCase()
// console.log(tooUpperCase)
// console.log(text.toLowerCase())

// let text1 = 'Hello'
// let text2 = 'Ruponty'
// let text3 = 'You are the beauty of beauties'
// let text4 = text1.concat(' ', text2, ' ', text3)
// // console.log(text4)
// console.log(text3.split(" "))
// let textArray = text3.split(" ")
// for (let index = 0; index < textArray.length; index += 2) {
//   console.log(textArray[index])
// }
// let text = 'Please locate where \"locate\" occurs!'
// let firstIndex = text.indexOf("locate", 22)
// let searchValue = text.search('locate')
// console.log(searchValue, firstIndex)
/*
dekhte search method and indexOf method same hole o era alada, search method 2nd parameter ney na r indexOf method regular expression ney na.
 */
//=================== JavaScript Templete Literarals=======================//
/*
  Templete Literals mane back tic use kora
*/
// let text = `He's often like "Johnny"`
// console.log(text)
// let textTwo =
//   `The quick
// brown fox
// jumps over
// the lazy dog.
// `;
// console.log(textTwo)
// let firstName = "John"
// let lastName = "Doe"
// let fullName =
//   `
// Hello!
// ${firstName} ${lastName}.
// `
// console.log(fullName)


// let addition = (1.25 * 10 + 2.25 * 10) / 10;
// console.log(addition)
// let x = 0xFF;
// console.log(typeof x)

// let number = 123;
// console.log(number, typeof number)
// let numberToString = number.toString();
// console.log(numberToString, typeof numberToString);

// let numberOne = 0.2;
// let numberTwo = 0.21;
// let addition = (numberOne * 10 + numberTwo * 10) / 10;
// console.log(addition);
// console.log(5e-3)

// let x = 10;
// let y = '20'
// let z = x + Number(y)
// let a = x + y + z;
// let b = x * y - z;
// let c = x - y + z;
// let d = x / y * z;
// console.log(z.toString(), typeof z)
// console.log(a.toString(), typeof a)
// console.log(b.toString(), typeof b)
// console.log(c.toString(), typeof c)
// console.log(d.toString(), typeof d)
// let str = z.toString()
// console.log(typeof str)

// const cars = ['saab', 'volvo', 'BMW', 45, 25, 40]
// cars.push('BMW')
// console.log(cars)
// cars[cars.length] = 'Ferrari'
// console.log(cars)

// let names = ['Momin', 'Usuf', 'Ali', 'Rupa', 'Ruponty', 'Priti', 'Sabiha']
// let arrToStr = names.join('*').substring(0, 5)
/* toString r join bolte gele same e but join parameter ney kintu toS tring kono parameter use kore na*/
// console.log(arrToStr)
// names.unshift('suraiya')
// let indexNumber = names.indexOf('Ruponty')
// console.log(indexNumber)
// console.log(indexNumber, typeof indexNumber)
// let lengthOfCar = cars.length;
// console.log(lengthOfCar, typeof lengthOfCar)
// let car = cars[0] //accessing 1st element of an array
// let lastCar = cars[(cars.length - 1)]  //accessing last element of an array
// console.log(car, typeof car, lastCar, typeof lastCar)

// const myBoys = ['salman', 'nabil', 'abdullah']
// const mychildren = myGirls.concat(myBoys);
// console.log(mychildren)

// const numbers = [10, 5, 8, 15, 7, 12, 9]
// let cutNumber = numbers.splice(2, 4)
// console.log(cutNumber)
// console.log(numbers)

// const numbers = [10, -72, 35, 7, -4, 0, 50]
// const myGirls = ['suraiya', 'rupa', 'ruponty', 'apple', 'ass']
// numbers.sort((a, b) => a - b)
// myGirls.sort()
// console.log(numbers)
// console.log(myGirls)
// const newNumbers = numbers.slice(2)
// numbers[numbers.length] = 10;
// console.log(numbers, newNumbers)

// const numbers = [40, 100, 1, 255, 25, 1000]
// function myArrMax(arr) {
//   return Math.max.apply(null, arr)
// }

// let maxNumber = myArrMax(numbers)
// numbers.sort((a, b) => a - b)
// let maxNumber = numbers[numbers.length - 1]
// console.log(maxNumber)
// const numbers = [40, 100, 1, 5, 25, 10]
// function myArrMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   // console.log(max, typeof max)
//   while (len--) {
//     // console.log(len)
//     if (arr[len] > max) {
//       max = arr[len]
//     }
//   }
//   return max
// }
// console.log(myArrMax(numbers))
// for (let index = 0; index < 5; index++) {
//   console.log(Math.round(Math.random() * 10))

// }

// function myRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let index = 0; index < 10; index++) {
//   console.log(myRandom(0, 5))
// }

// const fruit = 'mango'
// switch (fruit) {
//   case 'banana':
//     console.log(`banana's are $0.15 a pound`)
//     break;
//   case 'mango':
//     console.log(`mango's are $0.10 a pound`)
//     break;
//   default:
//     console.log(`Sorry! We are out of ${fruit}`)
//     break;
// }
/*
string theke kono kisu te number a convert a korar jonno "Number()" function use korte hoy
*/
// let example1 = '3.14';
// let example2 = '';
// let example3 = ' ';
// let example4 = '99 99'

// console.log(Number(example1), typeof Number(example1), Number(example2), typeof Number(example2), Number(example3), typeof Number(example3), Number(example4), typeof Number(example4))

// const toFindFarenhite = c => (1.8 * c + 32)

// console.log(toFindFarenhite(30))
// console.log(toFindFarenhite(100))

// const rahim = {
//   firstName: 'Rahim',
//   lastName: 'Miya',
//   age: 25,
//   address: 'Bogura',
//   job: 'Job Holder',
//   message: function () {
//     console.log(`Full name: ${this.firstName} ${this.lastName}`)
//   }
// }
// console.log(rahim.message())

// const objArr = {
//   normal: 'Normal Item',
//   names: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'],
//   age: [10, 35, 20, 15, 40]
// }
// console.log(objArr.names[2])
// console.log(objArr.age[4])

// const arrObj = ['bangladesh', { name: 'Rupa', age: 21, job: 'Student' }, 'Bogura']

// console.log(arrObj[1].name)
// console.log(arrObj[1].age)
// console.log(arrObj[arrObj.length - 1])

// const x = function (a, b) {
//   return a * b;
// }
// console.log(x(4, 5))
// const myObjcet = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }
// console.log(myObjcet.fullName())
// const person = {
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }
// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe',
// }
// const person2 = {
//   firstName: 'Mary',
//   lastName: 'Doe',
// }
// const person3 = {
//   firstName: 'Suraiya',
//   lastName: 'Rupa',
// }
// console.log(person.fullName.call(person3))
// const myObj = {
//   name: 'Suraiya',
//   age: 21,
//   job: 'Student',
//   class: 'Bachelor of Science',
//   anotherObj: {
//     name: 'Rupa',
//     value: function () {
//       console.log(`I am ${this.name} & ${this.age} years old. I am a ${this.job} and read in ${this.class}`)
//     }
//   }
// }

// const anoObj = {
//   name: 'Sabiha Tasnim Priti',
//   age: 13,
//   job: 'Student',
//   class: 'Six'
// }

// console.log(myObj.anotherObj.value.call(anoObj))

// function myFunction(c, d) {
//   return this.a + this.b + c - d;
// }
// const myObj = {
//   a: 5,
//   b: 15
// }
// let x = myFunction.call(myObj, 10, 5)
// console.log(x)
// let y = myFunction.bind(myObj)
// console.log(y(15, 10))


/* JavaScript Classes*/
// class Car {
//   constructor(name, year, price) {
//     this.name = name;
//     this.year = year;
//     this.price = price;
//   }
// }
// const myCar = new Car('Ford', 2014, '$1.5M');
// const myBus = new Car('Hanif', 2020, '20 Million');

// console.log(myBus.name)
// console.log(myBus.year)

// class Car {
//   constructor(name, model, year, price) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     this.price = price;
//   }
//   age(x) {
//     return x - this.year;
//   }
// }
// let year = new Date().getFullYear();
// const myCar1 = new Car('Ford', 'M-2014', 2017, '$1.5M')

// console.log(myCar1.model)
// console.log(myCar1.age(year))


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {

    return x - this.year;
  }
}
let year = new Date().getFullYear();
const myCar1 = new Car('Ford', 2010)
console.log(myCar1.age(year))







