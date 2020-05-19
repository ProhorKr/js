let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let q1 = prompt('ведите обязательную статью расходов в этом месяце');
let q2 = prompt('Во сколько обойдется?');

let appData = {
    'money' : money,
    'timeData' : time,
    expenses : {
        q1 : q2,
    },
    optionalExpenses : '',
    income : [],
    savings : false
};

alert(appData.money/30);


