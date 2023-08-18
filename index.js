//ЗВЕРНІТЬ УВАГУ!! Під час тестування функцій у вас можуть неправильно відображуватись певні символи.
//Це може залежити, як від вашої ОС так і версії Node, це не є критичним тому в тестах ви можете використовувати власні приклади.

// Завдання 1: Напишіть функцію, яка визначає довжину рядка

function findStringLength(str) {
  return str.length
  // Використовуємо властивість length, щоб знайти довжину рядка str
}

console.log("Завдання 1 ====================================");
console.log(
  'findStringLength("Hello, world!")',
  findStringLength("Hello, world!")
); // Виведе 13

// Завдання 2: Напишіть функцію, яка генерує рядок з символів на основі їх кодів Unicode

function generateStringFromCharCode(code1, code2, code3, code4, code5) {
  return String.fromCharCode(code1, code2, code3, code4, code5)
  // Використовуємо String.fromCharCode(), щоб створити рядок з символів code1, code2, code3, code4, code5 на основі їх кодів Unicode
}

console.log("Завдання 2 ====================================");
console.log(
  "generateStringFromCharCode(72, 101, 108, 108, 111)",
  generateStringFromCharCode(72, 101, 108, 108, 111)
); // Виведе "Hello"

// Завдання 3: Напишіть функцію, яка генерує рядок з символів на основі їх кодів Unicode

function generateStringFromCodePoint(code1, code2, code3, code4) {
  return String.fromCodePoint(code1, code2, code3, code4)

  // Використовуємо String.fromCodePoint(), щоб створити рядок з символів code1, code2, code3, code4 на основі їх кодів Unicode
}

console.log("Завдання 3 ====================================");
console.log(
  "generateStringFromCodePoint(9731, 9733, 9842, 0x2f804)",
  generateStringFromCodePoint(9731, 9733, 9842, 0x2f804)
); // Виведе "☃★♲你"

// Завдання 4: Напишіть функцію, яка виводить рядок з використанням String.raw

function rawString() {
  return String.raw`Привіт\u000A!`
  // Використовуємо String.raw, щоб створити рядок "Привіт\u000A!", який ігнорує спеціальні символи
}

console.log("Завдання 4 ====================================");
console.log("rawString()", rawString()); // Виведе Привіт\u000A!

// Завдання 5: Напишіть функцію, яка об'єднує два рядки

function concatenateStrings(str1, str2) {
  return str1.concat(str2)
  // Використовуємо метод concat(), щоб об'єднати два рядки str1 та str2
}

console.log("Завдання 5 ====================================");
console.log(
  'concatenateStrings("Hello", "World!")',
  concatenateStrings("Hello", "World!")
); // Виведе "HelloWorld!"

// Завдання 6: Напишіть функцію, яка перевіряє, чи входить підрядок в рядок

function checkIfIncludes(mainStr, subStr) {
  return mainStr.includes(subStr)
  // Використовуємо метод includes(), щоб перевірити, чи входить підрядок subStr в рядок mainStr
}

console.log("Завдання 6 ====================================");
console.log(
  'checkIfIncludes("Hello, world!", "world")',
  checkIfIncludes("Hello, world!", "world")
); // Виведе true

// Завдання 7: Напишіть функцію, яка знаходить індекс підрядка в рядку

function findIndexOf(mainStr, subStr) {
  return mainStr.indexOf(subStr)

  // Використовуємо метод indexOf(), щоб знайти індекс підрядка subStr в рядку mainStr
}

console.log("Завдання 7 ====================================");
console.log(
  'findIndexOf("Hello, world!", "world")',
  findIndexOf("Hello, world!", "world")
); // Виведе 7

// Завдання 8: Напишіть функцію, яка знаходить останній індекс підрядка в рядку

function findLastIndexOf(mainStr, subStr) {
  return mainStr.lastIndexOf(subStr)

  // Використовуємо метод lastIndexOf(), щоб знайти останній індекс підрядка subStr в рядку mainStr
}

console.log("Завдання 8 ====================================");
console.log(
  'findLastIndexOf("Hello, world! Hello, universe!", "Hello")',
  findLastIndexOf("Hello, world! Hello, universe!", "Hello")
); // Виведе 14

// Завдання 9: Напишіть функцію, яка перевіряє, чи починається рядок з певного підрядка

function checkIfStartsWith(mainStr, subStr) {
  return mainStr.startsWith(subStr)

  // Використовуємо метод startsWith(), щоб перевірити, чи починається рядок mainStr з певного підрядка subStr
}

console.log("Завдання 9 ====================================");
console.log(
  'checkIfStartsWith("Hello, world!", "Hello")',
  checkIfStartsWith("Hello, world!", "Hello")
); // Виведе true

// Завдання 10: Напишіть функцію, яка перевіряє, чи закінчується рядок певним підрядком

function checkIfEndsWith(mainStr, subStr) {
  return mainStr.endsWith(subStr)

  // Використовуємо метод endsWith(), щоб перевірити, чи закінчується рядок mainStr певним підрядком subStr
}

console.log("Завдання 10 ====================================");
console.log(
  'checkIfEndsWith("Hello, world!", "world!")',
  checkIfEndsWith("Hello, world!", "world!")
); // Виведе true

// Завдання 11: Напишіть функцію, яка демонструє різницю між методами charCodeAt, codePointAt, charAt, at

function compareCharCodeAtAndCodePointAt(string, index) {
  const charAtResult = string.charAt(index);
  const atResult = string.at(index);
  const charCodeAtResult = string.charCodeAt(index);
  const codePointAtResult = string.codePointAt(index);
  return `charCodeAt:${charCodeAtResult}, codePointAt:${codePointAtResult}, charAt:${charAtResult}, at: ${atResult}`
  // Використовуємо метод charAt(), щоб отримати символ з рядка на певній позиції, та запишемо результат в змінну charAtResult
  // Використовуємо метод at(), щоб отримати символ з рядка на певній позиції, та запишемо результат в змінну atResult
  // Використовуємо метод charCodeAt(), щоб отримати код символа з рядка на певній позиції, та запишемо результат в змінну charCodeAtResult
  // Використовуємо метод codePointAt(), щоб отримати код символа з рядка на певній позиції, та запишемо результат в змінну codePointAtResult
  // Повертаємо рядок в форматі  `charCodeAt:${charCodeAtResult}, codePointAt:${codePointAtResult}, charAt:${charAtResult}, at: ${atResult}`
}

console.log("Завдання 11 ====================================");
console.log(
  'compareCharCodeAtAndCodePointAt("★", 0)',
  compareCharCodeAtAndCodePointAt("★", 0)
); // Виведе charCodeAt:9733, codePointAt:9733, charAt:★, at: ★

console.log(
  'compareCharCodeAtAndCodePointAt("a", 0)',
  compareCharCodeAtAndCodePointAt("a", 0)
); // Виведе  charCodeAt:97, codePointAt:97, charAt:a, at: a

console.log(
  'compareCharCodeAtAndCodePointAt("😀", 0)',
  compareCharCodeAtAndCodePointAt("😀", 0)
); // Виведе charCodeAt:55357, codePointAt:128512, charAt:�, at: �

// Завдання 12: Напишіть функцію, яка буде додавати символи до рядка з початку або з кінця, в залежності від значення аргументу "side".

function padString(original, length, padWith, side) {
  if (side == "start") {
    return original.padStart(length, padWith)
  } else if (side == "end") {
    return original.padEnd(length, padWith)
  } else {
    return "Error: side should be either 'start' or 'end'"
  }
  // Перевіряємо, який бік було вказано
  // Якщо "start", використовуємо padStart
  // Використовуємо метод padStart(), щоб доповнити рядок string до певної довжини length, вставляючи символи padWith на початку
  // Якщо "end", використовуємо padEnd
  // Використовуємо метод padEnd(), щоб доповнити рядок string до певної довжини length, вставляючи символи padWith на в кінці
  // Якщо бік не вказано або вказано неправильно, повертаємо повідомлення "Error: side should be either 'start' or 'end'"
}

console.log("Завдання 12 ====================================");
console.log(
  'padString("123", 5, "0", "start")',
  padString("123", 5, "0", "start")
); // Виведе "00123"
console.log('padString("123", 5, "0", "end")', padString("123", 5, "0", "end")); // Виведе "12300"
console.log(
  'padString("123", 5, "0", "middle")',
  padString("123", 5, "0", "middle")
); // Виведе "Error: side should be either 'start' or 'end'"

// Завдання 13: Напишіть функцію, яка буде видаляти пробіли з рядка на початку, в кінці або з обох сторін, в залежності від значення аргументу "side".

function trimString(original, side) {
  if (side == "start") {
    return original.trimStart()
  } else if (side == "end") {
    return original.trimEnd()
  } else if (side == "both") {
    return original.trim()
  } else {
    return "Error: side should be either 'start', 'end' or 'both'"
  }
  // Якщо значення аргументу "side" дорівнює "start"
  // Повертаємо рядок, в якому видалені пробіли на початку
  // Якщо значення аргументу "side" дорівнює "end"
  // Повертаємо рядок, в якому видалені пробіли в кінці
  // Якщо значення аргументу "side" дорівнює "both"
  // Повертаємо рядок, в якому видалені пробіли з обох сторін
  // Якщо значення аргументу "side" не є ні "start", ні "end", ні "both", повертаємо повідомлення "Error: side should be either 'start', 'end' or 'both'"
  return "Error: side should be either 'start', 'end' or 'both'";
}

console.log("Завдання 13 ====================================");
console.log('trimString(" 123 ", "start")', trimString(" 123 ", "start")); // Виведе "123 "
console.log('trimString(" 123 ", "end")', trimString(" 123 ", "end")); // Виведе " 123"
console.log('trimString(" 123 ", "both")', trimString(" 123 ", "both")); // Виведе "123"
console.log('trimString(" 123 ", "middle")', trimString(" 123 ", "middle")); // Виведе "Error: side should be either 'start', 'end' or 'both'"

// Завдання 14: Напишіть функцію, яка буде перетворювати рядок в верхній або нижній регістр, в залежності від значення аргументу "caseType".

function convertCase(original, caseType) {
  if (caseType == "upper") {
    return original.toUpperCase()
  } else if (caseType == "lower") {
    return original.toLowerCase()
  } else {
    return "Error: caseType should be either 'upper' or 'lower'"
  }
  // Якщо значення аргументу "caseType" дорівнює "upper"
  // Повертаємо рядок, в якому всі букви перетворені в верхній регістр
  // Якщо значення аргументу "caseType" дорівнює "lower"
  // Повертаємо рядок, в якому всі букви перетворені в нижній регістр
  // Якщо значення аргументу "caseType" не є ні "upper", ні "lower", повертаємо повідомлення "Error: caseType should be either 'upper' or 'lower'"
  return "Error: caseType should be either 'upper' or 'lower'";
}

console.log("Завдання 14 ====================================");
console.log('convertCase("abc", "upper")', convertCase("abc", "upper")); // Виведе "ABC"
console.log('convertCase("ABC", "lower")', convertCase("ABC", "lower")); // Виведе "abc"
console.log('convertCase("abc", "middle")', convertCase("abc", "middle")); // Виведе "Error: caseType should be either 'upper' or 'lower'"

// Завдання 15: Напишіть функцію, яка повторює рядок певну кількість разів

function repeatString(string, times) {
  return string.repeat(times)
  // Використовуємо метод repeat(), щоб повторити рядок певну кількість разів times
}

console.log("Завдання 15 ====================================");
console.log('repeatString("abc", 3)', repeatString("abc", 3)); // Виведе 'abcabcabc'

// Завдання 16: Напишіть функцію, яка видаляє частину рядка між двома індексами

function sliceString(string, startIndex, endIndex) {
  return string.slice(startIndex, endIndex)
  // Використовуємо метод slice(), щоб видалити частину рядка string між двома індексами startIndex та endIndex
}

console.log("Завдання 16 ====================================");
console.log(
  'sliceString("Hello, world!", 0, 5)',
  sliceString("Hello, world!", 0, 5)
); // Виведе 'Hello'

// Завдання 17: Напишіть функцію, яка видаляє частину рядка між двома індексами використовуючи substring

function substringString(string, startIndex, endIndex) {
  return string.substring(startIndex, endIndex)

  // Використовуємо метод substring(), щоб видалити частину рядка string між двома індексами startIndex та endIndex
}

console.log("Завдання 17 ====================================");
console.log(
  'substringString("Hello, world!", 0, 5)',
  substringString("Hello, world!", 0, 5)
); // Виведе 'Hello'
