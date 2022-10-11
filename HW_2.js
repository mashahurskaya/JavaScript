/*2я домашка по JS со звездочками:

1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
*/

let result = 1;
for (let i = 1; i <= 10; i++)
    result *= 2;

console.log(result);

/*
1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
*/

function powersOfTwo(power) {
    let result = 1;
    for (let i = 1; i <= power; i++)
        result *= 2;

    return result;
}

console.log(powersOfTwo(10));

/*
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/

let str = '';
for (let i = 0; i < 5; i++) {
    str += ':)';
    console.log(str);
}

/*
2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)
*/

function printSmile(stroka, numberOfRows) {
    let str = '';
    for (let i = 0; i < numberOfRows; i++) {
        str += stroka;
        console.log(str);
    }
}

printSmile('B)', 5);

/*
3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'
*/

function getWordStructure(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let vowelCount = 0;
    let consonantCount = 0;
    for (const char of word.toLowerCase().split('')) {
        if (char < 'a' || 'z' < char)
            continue;

        if (vowels.includes(char))
            vowelCount++;
        else
            consonantCount++;
    }
    console.log(`Слово ${word} состоит из ${vowelCount} гласных и ${consonantCount} согласных букв`);
}

getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');

/*
4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/

function isPalindrom(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i])
            return false;
    }

    return true;
}

console.log(isPalindrom('abba'));
console.log(isPalindrom('Abba'));