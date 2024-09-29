//Задание 1: Найти сумму всех элементов массива. Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех элементов. Реализуйте это с помощью цикла for.
let numbers = [1, 2, 3, 4, 5]; // Пример массива
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray(numbers));

// Задание 2: Найти максимальный элемент массива. Напишите функцию findMax, которая принимает массив чисел и возвращает максимальный элемент. Используйте цикл for.
let numbers1 = [3, 1, 4, 1, 5, 9]; // Пример массива
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
  max = arr[i];
  }
  }
  return max;
 }
 console.log(findMax(numbers1));

// Задание 3: Фильтрация массива по условию. Создайте функцию filterArray, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа. Реализуйте это с использованием цикла for.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Пример массива
function filterArray(arr) {
  let evenNumbers = [];
  for (let num of arr) {
  if (num % 2 === 0) {
  evenNumbers.push(num);
  }
  }
  return evenNumbers;
 }
 console.log(filterArray(numbers2));

// Задание 4: Реализация метода массива "map" через цикл. Напишите функцию mapArray, которая принимает массив и функцию-преобразователь. Эта функция должна возвращать новый массив, где каждый элемент является результатом применения функции-преобразователя к каждому элементу исходного массива. Реализуйте это с использованием цикла.
let numbers3 = [1, 2, 3, 4, 5]; // Пример массива
function multiplyByTwo(num) {
  return num * 2;
}
function mapArray(arr, callback) {
  let mappedArray = [];
  for (let i = 0; i < arr.length; i++) {
  mappedArray.push(multiplyByTwo(arr[i], i, arr));
}
  return mappedArray;
}
console.log(mapArray(numbers3, multiplyByTwo));

// Задание 5: Реализация метода массива "forEach" через цикл. Создайте функцию forEachArray, которая принимает массив и функцию, и применяет эту функцию к каждому элементу массива. Реализуйте это с использованием цикла for.

let numbers4 = [1, 2, 3, 4, 5]; // Пример массива
function printElement(element) {
  console.log(element);
}
 function forEachArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
  callback(arr[i], i, arr);
  }
}
forEachArray(numbers4, printElement); // Пример вывода: 1 2 3 4 5 (по одному числу на строку)

//  Задание 6: Развернуть массив. Напишите функцию reverseArray , которая принимает массив и возвращает его развернутую версию. Реализуйте это без использования встроенного метода reverse, используя цикл for.

let numbers5 = [1, 2, 3, 4, 5]; // Пример массива
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
  reversedArray.push(arr[i]);
  }
  return reversedArray;
}
console.log(reverseArray(numbers5)); // Пример вывода: [5, 4, 3, 2, 1]
