// Задание 1: Объявление переменных и условные операторы
console.log("Задание 1");
let name = 'Тимофыей'; // Замените на ваше имя
let age = 19; // Замените на ваш возраст

if (age >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}

// Задание 2: Циклы
console.log("\n\nЗадание 2");
// 1. Цикл for для вывода чисел от 1 до 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Цикл while для вывода чисел от 10 до 1
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Задание 3: Работа с массивами
console.log("\n\nЗадание 3");
const lectures = ['Тема 1', 'Тема 2', 'Тема 3', 'Очередная тема 1', 'Очерекдная тема 2'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

// 2. Добавление новых элементов в массивы
lectures.push('Тема 4');
practices.unshift('Практика 4');

// 3. Вывод всех тем лекций и практик
lectures.forEach(lecture => console.log(lecture));
practices.forEach(practice => console.log(practice));

// 4. Функция для вывода элементов массива в строку через запятую
function arrayToString(arr) {
  return arr.join(', ');
}

console.log(arrayToString(lectures)); // Вывод: "Тема 1, Тема 2, Тема 3, Тема 4"
console.log(arrayToString(practices)); // Вывод: "Практика 1, Практика 2, Практика 3, Практика 4"

// Задание 4: Манипуляции с массивами
console.log("\n\nЗадание 4");
// 1. Функция для получения тем, начинающихся с буквы "О"
function filterTopicsStartingWithO(arr) {
  return arr.filter(topic => topic.startsWith('О'));
}

// 2. Вывод результата работы функции в консоль
console.log(filterTopicsStartingWithO(lectures));
