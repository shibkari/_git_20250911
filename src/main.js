console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
var i = 3
console.log(i) // 3

console.log(i++) // 3
console.log(i) // 4

console.log(++i) // 5
console.log(i) // 5

console.log(i--) // 5
console.log(i) // 4

console.log(--i) // 3
console.log(i) // 3



/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
// +=
// –=
// *=
// /=
// %=
var myNum = 10
var myTest = 20
myTest += myNum
console.log(myTest) // 30
myTest -= myNum
console.log(myTest) // 20
myTest *= myNum
console.log(myTest) // 200
myTest /= myNum
console.log(myTest) // 20
myTest %= myNum
console.log(myTest) // 0



/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 (10 не включено) → myRandom
// 3 у 5 степені → myPow
var myPi = Math.PI
console.log(myPi) // 3.141592653589793
var myRound = Math.round(89.279)
console.log(myRound) // 89
var myRandom = Math.floor(Math.random() * 10)
console.log(myRandom) // випадкове число між 0..9
var myPow = Math.pow(3, 5)
console.log(myPow) // 243 


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
  length: 'Мама мыла раму, рама мыла маму'.length
}
console.log(strObj) // {str: 'Мама мыла раму, рама мыла маму', length: 30}
console.log(strObj.length) // 30
console.log(strObj.str) // 'Мама мыла раму, рама мыла маму'



/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama
var isRamaPos = strObj.str.indexOf('рама')
console.log(isRamaPos) // 10
var isRama = strObj.str.includes('рама')
console.log(isRama) // true


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace = strObj.str.replace('мыла', 'моет').replace('рама', 'Рама').replace('мыла', 'держит')
console.log(strReplace) // 'Мама моет раму, Рама держит маму'


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
var someStr = 'some STRING'
var upperStr = someStr.toUpperCase()
console.log(upperStr) // 'SOME STRING'
var lowerStr = someStr.toLowerCase()
console.log(lowerStr) // 'some string'
