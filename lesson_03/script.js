'use strict';

let money = 950;
let addExpenses = 'Hotel,courses,flights';
let question = prompt('Ваш месячный доход?', money);
let deposit = true;
let income = 'social';
let period = 6;
let question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', addExpenses, 'Во сколько это обойдется?', period);
let mission = 35e3;
let budgetDay = 310;

console.log('Перечислите возможные расходы за рассчитываемый период', Array(addExpenses));
console.log('Есть ли у вас депозит в банке?', deposit);
console.log(typeof deposit);
console.log(typeof money);
console.log(typeof income);
// console.log(budgetMonth(Number('money') -Number('550'));
console.log(Math.max(mission));
// console.log(Math.min(budgetMonth));
if(budgetDay>800){
    console.log("Высокий уровень дохода");
}else if(800>budgetDay>300){
    console.log("Средний доход");
}else(300>budgetDay>0){
    console.log("Низкий доход");
}





