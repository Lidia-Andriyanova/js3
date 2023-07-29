// Задание 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function cube (num) {
    return num * num * num;
}

console.log(`Куб числа 2 = ${cube(2)}`);
console.log(`Куб числа 3 = ${cube(3)}`);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
function isNumber(something) {
    num = Number(something);
    return  num == something ? `${something} это число` : `Значение ${something} задано неверно. Это не число.`;
}

const userAnswer = prompt('Введите число')
console.log(isNumber(userAnswer));


// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
function salaryWithoutTax(salary) {
    return `Заработная плата ${salary} за вычетом налогов равна ${salary * 0.87}`;
}

const userSalary = prompt('Введите заработную плату');
console.log(salaryWithoutTax(userSalary))


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
function maxNumber(num1, num2, num3) {
    
    maxFromTwoNums = (num1, num2) => num1 > num2 ? num1 : num2;
    const min122 = maxFromTwoNums(num1,  num2);
    return maxFromTwoNums(min122, num3);
}

const userNum1 = prompt('Введите число 1');
const userNum2 = prompt('Введите число 2');
const userNum3 = prompt('Введите число 3');
console.log(`Максимальное число из ${userNum1}, ${userNum2}, ${userNum3}: ${maxNumber(userNum1, userNum2, userNum3)} `);


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

const userNumber1 = Number(prompt('Введите первое число'));
const userNumber2 = Number(prompt('Введите второе число'));
console.log(`${userNumber1} + ${userNumber2} = ${((num1, num2) => num1 + num2)(userNumber1, userNumber2)}`);
console.log(`|${userNumber1} - ${userNumber2}| = ${((num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1)(userNumber1, userNumber2)}`);
console.log(`${userNumber1} * ${userNumber2} = ${((num1, num2) => num1 * num2)(userNumber1, userNumber2)}`);
console.log(`${userNumber1} / ${userNumber2} = ${((num1, num2) => num1 / num2)(userNumber1, userNumber2)}`);