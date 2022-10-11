// 29. Создать if в котором будете проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.

/*HW_1* 
Задания с разным количеством звездочек:)
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
}
Вывести в консоль результат работы функции с возрастами 17, 18, 61
*/
//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

//4***:
//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
const age_2 = 18;
const age_3 = 60;
function checkAge(age_1) {
    if (typeof age_1 === 'string' && !isNaN(age_1)) {
        age_1 = +age_1; // cast to a number
    }
    if (typeof age_1 === 'number') {
        if (age_1 < age_2) {
            alert(`You don't have access cause your age is ${age_1}. It's less than ${age_2}`);
        }
        else if (age_1 >= age_2 && age_1 < age_3) {
            alert('Welcome!');
        }
        else if (age_1 > age_3) {
            alert('Keep calm and watch Culture channel');
        }
        else {
            alert('Technical work');
        }
    } 
    else {
        alert ('It is not a number')
    }
}

checkAge(prompt('input age'));