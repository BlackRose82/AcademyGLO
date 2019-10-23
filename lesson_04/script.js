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

console.log(addExpenses.split(","));
console.log('Есть ли у вас депозит в банке?', deposit);
console.log(typeof deposit);
console.log(typeof money);
console.log(typeof income);
console.log(Math.ceil(mission/budgetMonth));
let budgetDay = budgetMonth/30;
console.log(Math.floor(budgetDay));

let getStatusIncome = function(){
   if(budgetDay>800){
      return("Высокий уровень дохода");
   }else if(800>budgetDay>300){
      return("Средний доход");
   }else if(300>budgetDay>0){
      return("Низкий доход");
   }else{
      return("Нулевой доход");
   }
};
getStatusIncome();


function getExpensesMonth(hotel, flights, courses){
   let res = hotel + flights + courses;
   console.log(res);
};
getExpensesMonth(350,200,400);

const accumulatedMonth = function(getAccumulatedMonth){
   let res1 = money - getExpensesMonth;
   console.log(res1);
};
accumulatedMonth();

function getTargetMonth(period,accumulatedMonth){
   console.log(period*accumulatedMonth);
}


let showTypeof = function(){
   console.log(typeof(data));;
};
showTypeof(accumulatedMonth);








