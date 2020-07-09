let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : '',
    income : [],
    savings : false
};

for (let i = 0; i<2; i++){
    a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = prompt('Во сколько обойдется?', '');

    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != ''){
        console.log('done');
        appData.expenses[a] = b;
    }
    else{
        i--;
        continue;
    }
}

appData.moneyPerDay = appData.budget/30;

alert('Ежедневный бюджет:' + appData.moneyPerDay);
