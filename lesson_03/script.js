'use strict';

let money =prompt('Ваш месячный доход?');
let addExpenses = 'Hotel,courses,flights';
let deposit = true;
let income = 'social';
let period = 6;
let mission = 35e3;
let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question2 = prompt('Во сколько это обойдется?');
let question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question4 = prompt('Во сколько это обойдется?');
let budgetMonth = money - question2 - question4;

console.log('Перечислите возможные расходы за рассчитываемый период', Array(addExpenses));
console.log('Есть ли у вас депозит в банке?', deposit);
console.log(typeof deposit);
console.log(typeof money);
console.log(typeof income);
console.log(Math.ceil(mission/budgetMonth));
let budgetDay = budgetMonth/30;
console.log(Math.floor(budgetDay));
if(budgetDay>800){
 console.log("Высокий уровень дохода");
 }else if(800>budgetDay>300){
    console.log("Средний доход");
 }else if(300>budgetDay>0){
    console.log("Низкий доход");
 }else{
     console.log("Нулевой доход");
}





